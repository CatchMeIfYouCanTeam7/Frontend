import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import Comment from "../../components/comment/Comment";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";

// redux
import {
  asyncAddComment,
  asyncGetCommentByQuestion,
} from "../../redux/modules/comment";
import { asyncGetOneQuestion } from "../../redux/modules/posting";

// styled-componenets
import {
  CommentList,
  CommentListContainer,
  CommentNone,
  CommentWrite,
  DetailContainer,
  DetailContent,
  DetailHeader,
  DetailHeaderWrap,
  DetailWrap,
} from "./Detail.styled";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // questionId

  const [inputComment, setInputComment] = useState("");
  const [hint, setHint] = useState("Hint");
  const [visibleCommentList, setVisibleCommentList] = useState(false);

	const [checkAuthor, setCheckAuthor] = useState(false);

  // 로그인 한 유저 데이터
  const location = useLocation();
  const userData = location.state ? location.state.userData : "";

  // 문제 하나 조회
  const question = useSelector((item) => item.posting.question.result);
  const getOneQuestion = (id) => {
    dispatch(asyncGetOneQuestion(id));
  };

  // 문제에 따른 댓글 전체 조회
  let commentList = useSelector((item) => item.comment.comments);
  const getCommentsByQuestion = (id) => {
    dispatch(asyncGetCommentByQuestion(id));
  };

  // 댓글 유무 확인 -> 댓글 보여주기
  const onCheckCommentList = () => {
    if (commentList.length > 0) {
      // commentList 최신순으로 정렬
      commentList = commentList
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        );
      // console.log(commentList);
      return commentList.map((item) => (
        <Comment
          key={item.id}
          comment={item}
          userNickname={userData.nickname}
          userId={userData.id}
        />
      ));
    } else {
      return <CommentNone>댓글이 없습니다!</CommentNone>;
    }
  };

  // hint 버튼 클릭 -> hint 보여주기
  const onClickHinkHandler = () => {
    setHint(question.hint);
  };

  // 댓글 보기 버튼
  const onClickShowCommentListHandler = () => {
    setVisibleCommentList(!visibleCommentList);
  };

  // 댓글 작성 -> 로그인 한 사람만 댓글 작성 가능
  const comment = useSelector((item) => item.comment.comment);
  const onClickEnrollCommentHandler = () => {

		const accessToken = JSON.parse(localStorage.getItem("accessToken" + userData.id));

		// access token 여부 확인 -> 로그인 기록 여부 확인
		if (accessToken) {
			// 정답 입력창 값 여부 확인
			if (inputComment === "") {
				alert("정답을 입력해주세요!");
			} else {
				// access token 유효시간과 현재 시간 확인
				if (new Date(accessToken.expireTime).valueOf() > Date.now().valueOf()) {
					const newComment = {
						userId: userData.id,
						questionId: +id,
						comment: inputComment,
					};
					dispatch(asyncAddComment(newComment));
					setInputComment("");
				} else {
					alert('로그인 기한이 만료되었습니다. 다시 로그인 해주세요!');
				}
			}
		} else {
			alert("로그인 하고 정답을 맞춰주세요!");
		}
  };
	
  const onMovePostingHandler = () => {
		const accessToken = JSON.parse(localStorage.getItem("accessToken" + userData.id));

		// access token 여부 확인 -> 로그인 기록 여부 확인
    if (accessToken) {
			if (new Date(accessToken.expireTime).valueOf() > Date.now().valueOf()) {
      	navigate(`/Posting/${id}`, { state: { userId: userData.id, question: question } });
			} else {
				alert('로그인 기한이 만료되었습니다. 다시 로그인 해주세요!');
			}
    } else {
			alert('로그인하고 글을 작성해주세요!');
		}
  };


  useEffect(() => {
    getOneQuestion(+id);
    getCommentsByQuestion(+id);
    // console.log(commentList);
		question.author === userData.nickname ? setCheckAuthor(true) : setCheckAuthor(false);
  }, [
    JSON.stringify(commentList),
    JSON.stringify(question),
    JSON.stringify(comment),
  ]);

  return (
    <DetailWrap>
      <Header userId={userData.id} />
      <DetailContainer>
        <DetailHeaderWrap>
          <Button id="backBtn" onClick={() => navigate(-1)}></Button>
          <DetailHeader>
            <span>닉네임: {question.author}</span>
            {checkAuthor ? (
							<Button
							id="editPostingBtn"
							onClick={onMovePostingHandler}
						>
							수정
						</Button>
						) : (
							null
						)}
          </DetailHeader>
        </DetailHeaderWrap>
        <DetailContent>
          <img src={question.imgUrl} alt="" />
          <Button id="hintBtn" onClick={onClickHinkHandler}>
            {hint}
          </Button>
        </DetailContent>
        <div>
          <CommentWrite>
            <div>
              <label htmlFor="nickname">닉네임</label>
              <span>{userData.nickname ? userData.nickname : "________"}</span>
              <label htmlFor="nickname">정답</label>
              <input
                type="text"
                value={inputComment}
                placeholder="5글자 제한"
                maxLength="5"
                onChange={(e) => {
                  setInputComment(e.target.value);
                }}
              />
            </div>
            <Button id="enrollCommentBtn" onClick={onClickEnrollCommentHandler}>
              등록
            </Button>
          </CommentWrite>
          <CommentListContainer>
            <CommentList>
              <Button
                id="showCommentBtn"
                onClick={onClickShowCommentListHandler}
              >
                {visibleCommentList ? "댓글 접기 △" : "댓글 보기 ▽"}
              </Button>
              {visibleCommentList && onCheckCommentList()}
            </CommentList>
          </CommentListContainer>
        </div>
      </DetailContainer>
    </DetailWrap>
  );
};

export default Detail;

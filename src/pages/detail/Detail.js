import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

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
  ButtonText,
  CommentList,
  CommentListContainer,
  CommentListWrap,
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
  const question = useSelector((item) => item.posting.question);
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
      // commentList 최신 댓글이 앞으로 출력되도록 수정
      commentList = commentList
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
        );

      return (
        <CommentList>
          {commentList.map((item) => (
            <Comment
              key={item.id}
              comment={item}
              userNickname={userData.nickname}
              userId={userData.id}
            />
          ))}
        </CommentList>
      );
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
    const accessToken = JSON.parse(
      localStorage.getItem("accessToken" + userData.id),
    );

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
          if (
            window.confirm(
              "로그인 기한이 만료되었습니다.\n 로그인 화면으로 이동하시겠습니까?",
            )
          ) {
            navigate("/login");
          }
        }
      }
    } else {
      if (
        window.confirm(
          "로그인 후 정답을 맞춰주세요!\n로그인 화면으로 이동하시겠습니까?",
        )
      ) {
        navigate("/login");
      }
    }
  };

  // 글 수정 화면으로 이동
  const onMovePostingHandler = () => {
    const accessToken = JSON.parse(
      localStorage.getItem("accessToken" + userData.id),
    );

    // access token 여부 확인 -> 로그인 기록 여부 확인
    if (accessToken) {
      if (new Date(accessToken.expireTime).valueOf() > Date.now().valueOf()) {
        navigate(`/Posting/${id}`, {
          state: { userData: userData, question: question },
        });
      } else {
        if (
          window.confirm(
            "로그인 기한이 만료되었습니다.\n 로그인 화면으로 이동하시겠습니까?",
          )
        ) {
          navigate("/login");
        }
      }
    } else {
      if (
        window.confirm(
          "로그인 후 글을 작성해주세요!\n로그인 화면으로 이동하시겠습니까?",
        )
      ) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getOneQuestion(+id);
    getCommentsByQuestion(+id);
    // console.log(commentList);
    question.author === userData.nickname
      ? setCheckAuthor(true)
      : setCheckAuthor(false);
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
          <DetailHeader>
            <Button id="backBtn" onClick={() => navigate(-1)}></Button>
            <div>
              <span style={{ fontSize: "32px", color: "#ffc500" }}>
                '{question.author}'
              </span>
              <span>님의 문제!</span>
            </div>
            {checkAuthor ? (
              <Button id="editPostingBtn" onClick={onMovePostingHandler}>
                수정
              </Button>
            ) : (
              <span style={{ width: "90px" }}></span>
            )}
          </DetailHeader>
        </DetailHeaderWrap>
        <DetailContent>
          <Button id="hintBtn" onClick={onClickHinkHandler}>
            {hint}
          </Button>
          <img src={question.imgUrl} alt="" />
        </DetailContent>
        <div>
          <CommentWrite>
            <div>
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
            <CommentListWrap>
              <Button
                id="showCommentBtn"
                onClick={onClickShowCommentListHandler}
              >
                <ButtonText>
                  {visibleCommentList ? "댓글 접기 " : "댓글 보기 "}
                  {visibleCommentList ? (
                    <HiChevronUp size="25px" />
                  ) : (
                    <HiChevronDown size="25px" />
                  )}
                </ButtonText>
              </Button>
              {visibleCommentList && onCheckCommentList()}
            </CommentListWrap>
          </CommentListContainer>
        </div>
      </DetailContainer>
    </DetailWrap>
  );
};

export default Detail;

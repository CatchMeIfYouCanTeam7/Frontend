import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// redux
import { addComment } from "../../redux/modules/comment";

// components
import Comment from "../../components/comment/Comment";
import Header from "../../components/header/Header";

// data
import { RESP } from "../../data/response";

// styled-componenets
import {
  CommentListContainer,
  CommentNone,
  CommentShowBtn,
  CommentWrite,
  DetailContainer,
  DetailContent,
  DetailHeader,
  DetailWrap,
} from "./Detail.styled";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // questionId

  const [comment, setComment] = useState({
    userNickname: "",
    comment: "",
  });
  const [hint, setHint] = useState("Hint");
  const [visibleCommentList, setVisibleCommentList] = useState(false);

  // 문제 하나 조회
  const question = RESP.QUESTION.result.find((item) => item.questionId === +id);

  // 문제에 따른 댓글 조회
  // let commentList = RESP.COMMENT.result.filter(
  //   (item) => item.questionId === +id,
  // );
  const commentList = useSelector((item) => item.comment.comment).filter(
    (item) => item.questionId === +id,
  );

  useEffect(() => {}, [commentList]);

  // 댓글 유무 확인 -> 댓글 보여주기
  const onCheckCommentList = () => {
    if (commentList.length > 0) {
      return commentList.map((item) => (
        <Comment key={item.answerId} comment={item} />
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

  // 댓글 작성
  const onClickEnrollCommentHandler = () => {
    if (comment.userNickname === "" || comment.comment === "") {
      alert("닉네임과 정답을 입력해주세요!");
    } else {
      const newComment = {
        answerId: RESP.COMMENT.result.length + 1,
        questionId: +id,
        userNickname: comment.userNickname,
        comment: comment.comment,
        createdAt: new Date().toISOString(),
      };
      dispatch(addComment(newComment));
      console.log("enroll", commentList);
      setComment({ userNickname: "", comment: "" });
    }
  };

  return (
    <DetailWrap>
      <Header />
      <DetailContainer>
        <DetailHeader>
          <button onClick={() => navigate(-1)}>뒤로가기</button>
          <button onClick={() => navigate(`/Posting/${id}`)}>수정하기</button>
        </DetailHeader>
        <DetailContent>
          <img src={question.imageUrl} alt="" />
          <button onClick={onClickHinkHandler}>{hint}</button>
        </DetailContent>
        <div>
          <CommentWrite>
            <div>
              <label htmlFor="nickname">닉네임</label>
              <input
                type="text"
                value={comment.userNickname}
                onChange={(e) => {
                  setComment({ ...comment, userNickname: e.target.value });
                }}
              />
              <label htmlFor="nickname">정답</label>
              <input
                type="text"
                value={comment.comment}
                onChange={(e) => {
                  setComment({ ...comment, comment: e.target.value });
                }}
              />
            </div>
            <button onClick={onClickEnrollCommentHandler}>등록</button>
          </CommentWrite>
          <CommentListContainer>
            <CommentShowBtn onClick={onClickShowCommentListHandler}>
              {visibleCommentList ? "댓글 접기 △" : "댓글 보기 ▽"}
            </CommentShowBtn>
            {visibleCommentList && onCheckCommentList()}
          </CommentListContainer>
        </div>
      </DetailContainer>
    </DetailWrap>
  );
};

export default Detail;

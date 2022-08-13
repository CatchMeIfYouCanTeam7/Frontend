import React from "react";
import { useDispatch } from "react-redux";

// redux
import { removeComment } from "../../redux/modules/comment";

// styled-componenets
import {
  CommentContainer,
  CommentContentWrap,
  CommentNicknameWrap,
} from "./Comment.styled";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const onRemoveCommentHandler = () => {
    dispatch(removeComment(comment.answerId));
  };

  return (
    <CommentContainer>
      <CommentNicknameWrap>
        <span>{comment.userNickname}</span>
        <hr />
      </CommentNicknameWrap>
      <CommentContentWrap>
        <span>{comment.comment}</span>
        <button onClick={onRemoveCommentHandler}>삭제</button>
        <hr />
      </CommentContentWrap>
    </CommentContainer>
  );
};

export default Comment;

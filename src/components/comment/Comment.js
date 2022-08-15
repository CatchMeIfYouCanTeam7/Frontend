import React from "react";
import { useDispatch } from "react-redux";

// redux
import { removeComment } from "../../redux/modules/comment";
import Button from "../button/Button";

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
        <Button id="removeCommentBtn" onClick={onRemoveCommentHandler}>
          삭제
        </Button>
        <hr />
      </CommentContentWrap>
    </CommentContainer>
  );
};

export default Comment;

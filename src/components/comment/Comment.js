import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// redux
import { asyncRemoveComment } from "../../redux/modules/comment";
import Button from "../button/Button";

// styled-componenets
import {
  CommentContainer,
  CommentContentWrap,
  CommentNicknameWrap,
	CommentShowCorrect,
} from "./Comment.styled";

const Comment = ({ comment, userNickname, userId }) => {
  const dispatch = useDispatch();

  // 본인이 작성한 댓글인지 확인
  const [isUser, setIsUser] = useState(false);

	const [isAnswer, setIsAnswer] = useState(comment.trueOrFalse);

  useEffect(() => {
    if (userNickname === comment.author) {
      setIsUser(true);
    }
  }, [comment]);

  // 댓글 삭제
  const removeCommentHandler = (commentId) => {
    dispatch(
      asyncRemoveComment({
        userId: userId,
        commentId: commentId,
      })
    );
  };

  return (
    <CommentContainer>
      <CommentNicknameWrap>
        <span>{comment.author}</span>
        <hr />
      </CommentNicknameWrap>
      <CommentContentWrap>
        <span>{isAnswer ? '*'.repeat(comment.comment.length) : comment.comment}</span>
				<CommentShowCorrect>{isAnswer ? "정답!" : ""}</CommentShowCorrect>
        {isUser ? (
          <Button
            id="removeCommentBtn"
            onClick={() => removeCommentHandler(comment.id)}
          >
            삭제
          </Button>
        ) : (
          ""
        )}

        <hr />
      </CommentContentWrap>
    </CommentContainer>
  );
};

export default Comment;

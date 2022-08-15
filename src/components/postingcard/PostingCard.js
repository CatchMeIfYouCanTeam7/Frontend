import React from "react";
import { useNavigate } from "react-router-dom";

// styled-componenets
import { PostingContainer } from "./PostingCard.styled";

const PostingCard = ({ question }) => {
  const navigate = useNavigate();

  const onMoveDetailHandler = () => {
    navigate(`/Detail/${question.questionId}`);
  };

  return (
    <>
      <PostingContainer
        src={question.imageUrl}
        alt="cm1"
        onClick={onMoveDetailHandler}
      />
    </>
  );
};

export default PostingCard;

import React from "react";
import { useNavigate } from "react-router-dom";

// styled-componenets
import { PostingContainer } from "./PostingCard.styled";

const PostingCard = ({ question, userData }) => {
  const navigate = useNavigate();

  const onMoveDetailHandler = () => {
    navigate(`/Detail/${question.id}`, {
      state: { userData: userData },
    });
  };

  return (
    <>
      <PostingContainer
        src={question.imgUrl}
        alt="cm1"
        onClick={onMoveDetailHandler}
      />
    </>
  );
};

export default PostingCard;

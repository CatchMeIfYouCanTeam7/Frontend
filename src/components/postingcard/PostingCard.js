import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostingCard = () => {
  const navigate = useNavigate();

  const onMoveDetailHandler = () => {
    navigate("/Detail");
  };

  return (
    <>
      <PostingContainer
        src="http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg"
        alt="cm1"
        onClick={onMoveDetailHandler}
      />
    </>
  );
};

const PostingContainer = styled.img`
  width: 400px;
  height: 300px;
  margin: 20px auto;

  border-radius: 20px;
  box-shadow: 5px 5px 10px gray;
`;

export default PostingCard;

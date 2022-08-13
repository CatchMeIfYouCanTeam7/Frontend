import React from "react";
import { useNavigate } from "react-router-dom";

// components
import Header from "../../components/header/Header";
import PostingCard from "../../components/postingcard/PostingCard";

// data
import { RESP } from "../../data/response";

// styled-componenets
import {
  ListContainer,
  ListHeader,
  MainContainer,
  MainWrap,
} from "./Main.styled";

const Main = () => {
  const navigate = useNavigate();

  // 문제 전체 조회
  const questionList = RESP.QUESTION.result;

  return (
    <MainWrap>
      <Header />
      <MainContainer>
        <ListHeader>
          <h1>그림을 맞춰줘!</h1>
          <button onClick={() => navigate("/Posting")}>글 작성</button>
        </ListHeader>
        <ListContainer>
          {questionList.map((item) => {
            return <PostingCard key={item.questionId} question={item} />;
          })}
        </ListContainer>
      </MainContainer>
    </MainWrap>
  );
};

export default Main;

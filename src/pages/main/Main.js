import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

// components
import Header from "../../components/header/Header";
import PostingCard from "../../components/postingcard/PostingCard";

// data
import { RESP } from "../../data/response";

// styled-componenets
import {
  ImageWrap,
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
          <p>
            상상력을 발휘해 <br />
            정답을 맞춰주세요!
          </p>
          <Button id="postingBtn" onClick={() => navigate("/Posting")}>
            글 작성
          </Button>
        </ListHeader>
        <ListContainer>
          {questionList.map((item) => {
            return <PostingCard key={item.questionId} question={item} />;
          })}
        </ListContainer>
        <ImageWrap src={require("../../image/pencil.png")} alt="" />
      </MainContainer>
    </MainWrap>
  );
};

export default Main;

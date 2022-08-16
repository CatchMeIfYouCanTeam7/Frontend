import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// components
import Header from "../../components/header/Header";
import PostingCard from "../../components/postingcard/PostingCard";
import Button from "../../components/button/Button";

// redux
import { asyncGetAllQuestion } from "../../redux/modules/posting";

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
  const dispatch = useDispatch();

  const location = useLocation();
  const userData = location.state ? location.state.userData : "";

  // 문제 전체 조회
  let questionList = useSelector((state) => state.posting.questions.result);
  questionList = questionList
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
    );
   
  const getAllPosting = () => {
    dispatch(asyncGetAllQuestion());
  };

  useEffect(() => {
    getAllPosting();
  }, [JSON.stringify(questionList)]);

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
          {questionList.length > 0 &&
            questionList?.map((item) => {
              return (
                <PostingCard
                  key={item.id}
                  question={item}
                  userData={userData}
                />
              );
            })}
        </ListContainer>
        <ImageWrap src={require("../../image/pencil.png")} alt="" />
      </MainContainer>
    </MainWrap>
  );
};

export default Main;
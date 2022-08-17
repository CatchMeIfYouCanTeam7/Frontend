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
  let questionList = useSelector((state) => state.posting.questions);
	if (questionList > 0) {
		questionList = questionList
			.slice()
			.sort(
				(a, b) =>
					new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
			);
	}

  const getAllPosting = () => {
    dispatch(asyncGetAllQuestion());
  };


  const onMovePostingHandler = () => {
		const accessToken = JSON.parse(localStorage.getItem("accessToken" + userData.id));
		
		// access token 여부 확인 -> 로그인 기록 여부 확인
    if (accessToken) {
			console.log(new Date(accessToken.expireTime));
			if (new Date(accessToken.expireTime).valueOf() > Date.now().valueOf()) {
      	navigate("/posting", { state: { userData: userData } });
			} else {
				if (window.confirm('로그인 기한이 만료되었습니다.\n 로그인 화면으로 이동하시겠습니까?')) {
					navigate('/login');
				}
			}
    } else {
			if (window.confirm('로그인 후 글을 작성해주세요!\n로그인 화면으로 이동하시겠습니까?')) {
				navigate('/login');
			}
		}
  };

  useEffect(() => {
    getAllPosting();
		// console.log(questionList);
  }, [JSON.stringify(questionList)]);

  return (
    <MainWrap>
      <Header userId={userData.id}/>
      <MainContainer>
        <ListHeader>
          <p>
            상상력을 발휘해 <br />
            정답을 맞춰주세요!
          </p>
          <Button id="postingBtn" onClick={onMovePostingHandler}>

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

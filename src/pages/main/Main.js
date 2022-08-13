import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import PostingCard from "../../components/postingcard/PostingCard";
import { RESP } from "../../data/response";

const Main = () => {
	console.log(RESP.QEUSTION.result);

  return (
    <MainWrap>
      <Header />
      <MainContainer>
        <ListHeader>
          <h1>그림을 맞춰줘!</h1>
          <button>글 작성</button>
        </ListHeader>
        <ListContainer>
          {Array.from({ length: 4 }, (_, idx) => {
            return <PostingCard key={idx} />;
          })}
        </ListContainer>
      </MainContainer>
    </MainWrap>
  );
};

const MainWrap = styled.div`
	width: 99.655vw;
	height: 99.655vh;
	display: flex;
	flex-direction: column;
`;

const MainContainer = styled.div`
  background-color: aliceblue;

  width: 570px;
  height: 825px;
  margin: auto;
  text-align: center;
`;

const ListHeader = styled.div`
  width: 80%;
	height: 125px;
  margin: 10px auto;

  display: flex;
  justify-content: space-between;
  position: relative;

  button {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
`;

const ListContainer = styled.div`
  background-color: lightgreen;
	height: 700px;
	
  // scroll
  overflow-y: scroll;
	
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-track {
	  box-shadow: inset 0 0 5px grey; 
	  border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 5px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: #333;
		border-radius: 5px;
	}
`;

export default Main;

import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PostingCard from "../components/PostingCard";

const Main = () => {
  return (
    <>
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
    </>
  );
};

const MainContainer = styled.div`
  background-color: aliceblue;

  width: 30rem;
  height: 80vh;
  margin: 30px auto;
  text-align: center;

  // scroll
  /* overflow-y: scroll;
	
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
	} */
`;

const ListHeader = styled.div`
  width: 26rem;
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
`;

export default Main;

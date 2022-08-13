import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header/Header";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <DetailWrap>
      <Header />
      <DetailContainer>
        <DetailHeader>
          <button onClick={() => navigate(-1)}>뒤로가기</button>
          <button>수정하기</button>
        </DetailHeader>
        <DetailContent>
          <img
            src="http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg"
            alt=""
          />
          <button>힌트</button>
        </DetailContent>
        <div>
          <CommentWrite>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" />
            <label htmlFor="comment">정답</label>
            <input type="text" />
            <button>등록</button>
          </CommentWrite>
          <CommentListContainer>
            <button>댓글 보기</button>
            <CommentWrap>
              <span>nickname</span>
              <span>comment</span>
              <button>삭제</button>
            </CommentWrap>
          </CommentListContainer>
        </div>
      </DetailContainer>
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
	flex-direction: column;
`;

const DetailContainer = styled.div`
  width: 570px;
  height: 825px;
  margin: auto;
  padding: 20px;

  text-align: center;

  border: 1px solid black;
`;

const DetailHeader = styled.div`
  margin: 20px;
  /* background-color: aqua; */

  display: flex;
  justify-content: space-between;
`;

const DetailContent = styled.div`
  button {
    margin: 20px;
  }

  img {
    width: 100%;
  }
`;

const CommentWrite = styled.div`
  margin: auto 20px;

  display: flex;
  justify-content: space-between;

  input {
    width: 8rem;
    margin: auto 10px;
    padding: 5px;
    background-color: aliceblue;
    border: 0px solid #ffffff;
    border-radius: 5px;
  }
`;

const CommentListContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const CommentWrap = styled.div`
  /* background-color: blue; */
  margin: 20px auto;

  display: flex;
  justify-content: space-between;
`;

export default Detail;

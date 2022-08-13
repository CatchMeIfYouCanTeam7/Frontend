import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const DetailContainer = styled.div`
  width: 570px;
  height: 825px;
  margin: auto;

  text-align: center;

  border: 1px solid black;
`;

export const DetailHeader = styled.div`
  margin: 20px;

  display: flex;
  justify-content: space-between;
`;

export const DetailContent = styled.div`
  button {
    margin: 20px;
  }

  img {
    width: 500px;
    height: 400px;
  }
`;

export const CommentWrite = styled.div`
  margin: auto 20px;

  display: flex;
  justify-content: space-between;

  input {
    width: 170px;
    margin: auto 10px;
    padding: 5px;

    background-color: aliceblue;
    border: 0px solid #ffffff;
    border-radius: 5px;
  }
`;

export const CommentListContainer = styled.div`
  text-align: left;
  margin: 30px 20px;
`;

export const CommentShowBtn = styled.button`
  margin-bottom: 10px;
`;

export const CommentNone = styled.p`
	text-align: center;
`;
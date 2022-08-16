import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const DetailContainer = styled.div`
  width: 30%;
	min-width: 500px;
	height: 70%;
	min-height: 700px;
  margin: auto;

  background-color: #5357f6;

  text-align: center;

  border: 6px solid black;
  border-radius: 15px;
`;

export const DetailHeaderWrap = styled.div`
  margin: 20px auto;
  width: 85%;

  text-align: start;
`;

export const DetailHeader = styled.div`
  margin: 10px auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  span {
    color: white;
    font-weight: bold;
    font-size: 17px;
  }
`;

export const DetailContent = styled.div`
  img {
    width: 85%;
    height: 350px;

    border: 6px solid black;
    border-radius: 9.5px;
  }
`;

export const CommentWrite = styled.div`
	width: 85%;
	margin: auto;
	
	text-align: left;
	display: flex;
	justify-content: space-between;
	
	label {
		font-size: 18px;
		font-weight: bold;
	}
	
	span {
		width: 20%;
		margin: auto 10px;
		padding: 5px 10px;

		display: inline-block;
	
		font-size: 18px;
		font-weight: bold;
	}
	
	input {
		width: 25%;
		margin: auto 10px;
		padding: 5px 10px;
		
		background-color: aliceblue;
		border: 0px solid #ffffff;
		border-radius: 5px;
	}
`;

export const CommentListContainer = styled.div`
  width: 100%;
  height: 150px;
  margin: 30px auto;

  // scroll
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: none 10 0 5px grey;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffc500;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ef8b7c;
    border-radius: 5px;
  }
`;

export const CommentList = styled.div`
  width: 85%;
  text-align: left;
  margin: auto;
`;

export const CommentNone = styled.p`
  text-align: center;
	color: white;
`;

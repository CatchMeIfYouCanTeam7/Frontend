import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const DetailContainer = styled.div`
  width: 30%;
  min-width: 30em;
	max-width: 40em;
  margin: auto;
  text-align: center;

  border: 6px solid black;
  border-radius: 15px;

  background-color: #5357f6;
  position: relative;

	display: flex;
	flex-direction: column;
`;

export const DetailHeaderWrap = styled.div`
  margin: 20px auto;
  width: 85%;

  text-align: start;
`;

export const DetailHeader = styled.div`
	height: 50px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const DetailHeaderUsername = styled.span`
	font-size: 32px;
	color: #ffc500;
`;

export const DetailContent = styled.div`
  img {
    width: 85%;
		height: 18em;

    border: 6px solid black;
    border-radius: 9.5px;
  }
`;

export const CommentWrite = styled.div`
	width: 85%;
	margin: 20px auto;
	
	text-align: left;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	label {
		margin: auto 0;
		display: inline-block;

		font-size: 22px;
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
		width: 60%;
		margin: auto 7px;
		padding: 5px 10px;

		font-family: 'Jua', sans-serif;

		background-color: white;
		border: 4px solid black;
		border-radius: 10px;
		outline: none;
	}
`;

export const CommentListContainer = styled.div`
  width: 100%;
  margin: 30px auto;
`;

export const CommentListWrap = styled.div`
  width: 87%;
  text-align: left;
  margin: auto;
`;

export const ButtonText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CommentList = styled.div`
	height: 200px;
	background-color: #d3d3d3;
	border: 6px solid black;
	padding: 20px;
	border-radius: 20px;
	
  // scroll
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
	&::-webkit-scrollbar-track {
		margin: 8px auto;
	}
  &::-webkit-scrollbar-thumb {
    /* background: #ffc500; */
		background: #ef8b7c;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    border-radius: 5px;
  }
`;

export const CommentNone = styled.p`
  text-align: center;
	color: white;
`;


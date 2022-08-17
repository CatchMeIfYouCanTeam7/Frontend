import styled from "styled-components";

export const CommentContainer = styled.div`
  margin: 10px auto;

  display: flex;

  span {
    padding: 0px 10px;
    font-size: 17px;
    font-weight: bold;
  }

  hr {
    background-color: black;
    height: 2px;
    border: 0;
  }
`;

export const CommentShowCorrect = styled.span`
	color: white;
`;

export const CommentNicknameWrap = styled.div`
  width: 25%;
`;

export const CommentContentWrap = styled.div`
  width: 70%;
  margin-left: 5%;

  button {
    float: right;
  }
`;

import styled from "styled-components";

export const PostingContainer = styled.img`
  width: 80%;
  height: 260px;
  margin: 20px auto;

  border: 6px solid black;
  border-radius: 15px;

  &:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
  }
`;

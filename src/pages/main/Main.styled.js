import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  width: 30%;
	min-width: 500px;
	height: 70%;
	min-height: 700px;
  margin: auto;
  text-align: center;

  border: 6px solid black;
  border-radius: 15px;

  background-color: #5357f6;
  position: relative;
`;

export const ListHeader = styled.div`
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

  p {
    color: white;
    text-align: left;
    font-size: 32px;
    font-weight: bold;
  }
`;

export const ListContainer = styled.div`
  /* background-color: lightgreen; */
  height: 82.5%;

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
    /* background: #ef8b7c; */
    background: #ffc500;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ef8b7c;
    border-radius: 5px;
  }
`;

export const ImageWrap = styled.img`
  height: 330px;
  position: absolute;
  right: -90px;
  bottom: -60px;
`;

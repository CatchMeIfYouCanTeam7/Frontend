import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  width: 570px;
  height: 825px;
  margin: auto;
  text-align: center;

  background-color: aliceblue;
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
`;

export const ListContainer = styled.div`
  background-color: lightgreen;
  height: 700px;

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
    background: #888;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #333;
    border-radius: 5px;
  }
`;

import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <h1 className="logo" style={{ marginLeft: "30px" }}>
        LOGO
      </h1>
      <div style={{ marginLeft: "auto" }}></div>
      &nbsp;&nbsp;
      <h3 className="signUpBox" style={{ marginRight: "20px" }}>
        회원가입
      </h3>
    </StHeader>
  );
};

const StHeader = styled.div`
  width: 99.655%;
  height: 100px;
  display: flex;
  align-items: center;
  border: 4px solid black;
`;

export default Header;

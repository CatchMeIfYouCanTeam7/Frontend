import React from "react";
import { StHeader } from "./Header.styled";

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

export default Header;

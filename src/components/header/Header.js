import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import axios from "axios";

// Style import
import { CatchLogo, StHeader } from "./Header.styled";

const Header = ({ userId }) => {
  const navigate = useNavigate();

  const LogoutHandler = () => {
    console.log(JSON.parse(localStorage.getItem("accessToken" + userId)));
    axios
      .get(process.env.REACT_APP_URL + "/api/auth/members/logout", {
        headers: {
          Authorization: JSON.parse(
            localStorage.getItem("accessToken" + userId)
          ).auth,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    localStorage.removeItem("accessToken" + userId);
    alert("로그아웃 하였습니다!");
    navigate('/')
  };

  return (
    <StHeader>
      <CatchLogo onClick={() => navigate("/")} />
      <div style={{ marginLeft: "auto" }}></div>
      &nbsp;&nbsp;
      {localStorage.length>0 ?
      <Button
        onClick={LogoutHandler}
        className="signUpBox"
        style={{ marginRight: "20px", width: "100px" }}
      >
        로그아웃
      </Button> :
      <><Button
          onClick={() => navigate("/Login")}
          className="signUpBox"
          style={{ marginRight: "20px", width: "100px" }}
        >
          로그인
        </Button><Button
          onClick={() => navigate("/SignUp")}
          className="signUpBox"
          style={{ marginRight: "20px", width: "100px" }}
        >
            회원가입
          </Button></>};
    </StHeader>
  );
};

export default Header;

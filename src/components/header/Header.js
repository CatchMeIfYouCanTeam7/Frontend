import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import axios from "axios";

// Style import
import { CatchLogo, StHeader } from "./Header.styled";

const Header = ({ userData }) => {
  const navigate = useNavigate();

  const LogoutHandler = () => {
    // console.log(JSON.parse(localStorage.getItem("accessToken" + userId)));
    axios
      .get(process.env.REACT_APP_URL + "/api/auth/members/logout", {
        headers: {
          Authorization: JSON.parse(
            localStorage.getItem("accessToken" + userData.id),
          ).auth,
        },
      })
      .then((res) => {})
      .catch((error) => {});

    localStorage.removeItem("accessToken" + userData.id);

    alert("로그아웃 하였습니다!");
    navigate("/", { state: { userData: userData } });
  };

  return (
    <StHeader>
      <CatchLogo
        onClick={() => navigate("/", { state: { userData: userData } })}
      />
      <div style={{ marginLeft: "auto" }}></div>
      &nbsp;&nbsp;
      {localStorage.length > 0 ? (
				<Button
					id="signUpBtn"
					onClick={LogoutHandler}
					className="signUpBox"
					style={{ marginRight: '20px', width: '120px', fontSize:'17px'}}
				>
					LOG OUT
				</Button>
      ) : (
        <>
          <Button
            id="logInBtn"
            onClick={() => navigate("/Login")}
            className="signUpBox"
            style={{ marginRight: "20px", width: "100px" }}
          >
            LOG IN
          </Button>
          <Button
            id="signUpBtn"
            onClick={() => navigate("/SignUp")}
            className="signUpBox"
            style={{ marginRight: "20px", width: "100px" }}
          >
            SIGN UP
          </Button>
        </>
      )}
      ;
    </StHeader>
  );
};

export default Header;

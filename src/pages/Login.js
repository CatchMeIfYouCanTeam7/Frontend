import React from "react";
import "./Login.css";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
      <Header></Header>
      <div className="loginBoxFull">
        <div className="loginDivBox">
          <table className="idPwTable">
            <tr>
              ID :&nbsp;
              <input></input>
            </tr>
            <div className="idPwBtn">
              PW :&nbsp;
              <input></input>
            </div>
            <button>로그인</button>
            <button>회원가입</button>
          </table>
        </div>
      </div>
    </>
  );
};

export default Login;

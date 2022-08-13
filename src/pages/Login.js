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
            <h1>LOG IN</h1>
            <tr>
              E-mail :&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="idInput"/>
            </tr>
            <tr className="idPwBtn">
              Password :&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="passwordInput"/>
            </tr>
            <div className="buttonGroup">  
              <button>로그인</button>
              <button>회원가입</button>
            </div>
          </table>
        </div>
      </div>
    </>
  );
};

export default Login;

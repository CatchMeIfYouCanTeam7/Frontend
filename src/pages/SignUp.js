import React from "react";
import Header from "../components/Header";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <Header>SIGN UP</Header>
      <div className="signUpBoxFull">
        <div className="SignUpDivBox">
          <table className="signUpTable">
            <h1>회원가입</h1>
            <div className="signUpContents">
              <tr>
                E-mail :&nbsp;&nbsp;&nbsp;&nbsp;
                <input placeholder="email"></input><button>중복확인</button>
              </tr>
              <tr>
                Nickname :&nbsp;&nbsp;&nbsp;&nbsp;
                <input placeholder="2~6글자"></input>
              </tr>
              <tr className="idPwBtn">
                Password :&nbsp;&nbsp;&nbsp;&nbsp;
                <input></input>
              </tr>
              <tr className="idPwBtn">
                <span>
                  Re-entepassword
                  &nbsp;
                </span> 
                
                <span>:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input></input>
              </tr>
            </div>
            <button>이전</button>
            <button>회원가입</button>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

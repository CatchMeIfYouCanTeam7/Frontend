import React from "react";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <div>
      <Header>회원가입 페이지</Header>
      <div className="loginBoxFull">
        <div className="loginDivBox">
          <table className="idPwTable">
            <tr>
              ID :&nbsp;
              <input placeholder="email"></input>
              <button>중복확인</button>
            </tr>
            <tr>
              닉네임 :&nbsp;
              <input placeholder="2~6글자"></input>
              <button>중복확인</button>
            </tr>
            <tr className="idPwBtn">
              PW :&nbsp;
              <input></input>
            </tr>
            <tr className="idPwBtn">
              PW 확인 :&nbsp;
              <input></input>
            </tr>
            <button>이전</button>
            <button>회원가입</button>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

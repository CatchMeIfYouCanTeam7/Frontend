import { useState, useRef, useEffect } from "react";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { StLoginDivFull, StLoginDivBox } from "../login/Login.styled";
import { StSignUpInput, StSignUpForm, StSignUpDiv } from "./SignUp.styled";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [email, setEmail] = useState("");
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  // handler 함수들
  const EmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const NickNameHandler = (event) => {
    setNickName(event.currentTarget.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const ReEnterPasswordHandler = (event) => {
    setReEnterPassword(event.currentTarget.value);
  };

  const SubmitHandler = (event) => {
    //태그의 기본 기능으로 리프레쉬 되는 것을 방지.
    event.preventDefault();

    axios.post(process.env.REACT_APP_URL+'/api/mebers/signup', {
      email: email,
      nickname: nickname,
      password: password,
      passwordCheck: reEnterPassword,
    })
    .then((res) => {
      console.log(res.data.data)
      console.log(res);
      console.log('서버연동 성공')
      alert("회원가입을 축하드립니다^^");
      navigate("/Login");
    })
    .catch((error) => {

    });
  };

  return (
    <>
      <Header>SIGN UP</Header>
      <StLoginDivFull>
        <StLoginDivBox>
          <h1>SIGN UP</h1>
          <StSignUpForm onSubmit={SubmitHandler}>
            <StSignUpDiv>
              <label>E-mail :</label>
              <StSignUpInput
                placeholder="email을 입력해주세요"
                type="email"
                ref={userRef}
                Value={email}
                onChange={EmailHandler}
              />

              <label>Nickname :</label>
              <StSignUpInput
                placeholder="2~8글자"
                type="text"
                value={nickname}
                onChange={NickNameHandler}
              />

              <label className="idPwBtn">Password :</label>
              <StSignUpInput
                type="password"
                value={password}
                onChange={PasswordHandler}
              />
              <label className="idPwBtn">Re-enter Password :</label>
              <StSignUpInput
                type="password"
                value={reEnterPassword}
                onChange={ReEnterPasswordHandler}
              />
            </StSignUpDiv>
            <button
              onClick={() => navigate("/Login")}
              style={{ marginRight: "5px" }}
              type="button"
            >
              이전
            </button>
            <button 
            style={{ marginLeft: "5px" }} 
            type="submit">
              회원가입
            </button>
          </StSignUpForm>
        </StLoginDivBox>
      </StLoginDivFull>
    </>
  );
};

export default SignUp;

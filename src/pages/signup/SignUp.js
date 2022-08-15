import { useState, useRef, useEffect } from "react";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { StLoginDivFull, StLoginDivBox } from "../login/Login.styled";
import { StSignUpInput, StSignUpForm, StSignUpDiv } from "./SignUp.styled";

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
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNickNameHandler = (event) => {
    setNickName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onReEnterPasswordHandler = (event) => {
    setReEnterPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    //태그의 기본 기능으로 리프레쉬 되는 것을 방지.
    event.preventDefault();

    // if (Password !== ConfirmPassword) {
    //   return alert('비밀번호 확인이 일치하지 않습니다.');
    // }

    // let body = {
    //   email: Email,
    //   name: Name,
    //   password: Password,
    // };

    // // action을 dispatch해준다.
    // dispatch(registerUser(body)).then((response) => {
    //   if (response.payload.success) {
    //     props.history.push('/');
    //   } else {
    //     alert('회원가입에 실패했습니다.');
    //   }
    // });
  };

  return (
    <>
      <Header>SIGN UP</Header>
      <StLoginDivFull>
        <StLoginDivBox>
          <h1>SIGN UP</h1>
          <StSignUpForm onSubmit={onSubmitHandler}>
            <StSignUpDiv>
              <label>E-mail :</label>
              <StSignUpInput
                placeholder="email을 입력해주세요"
                type="email"
                ref={userRef}
                defaultValue={email}
                onChanege={onEmailHandler}
              />

              <label>Nickname :</label>
              <StSignUpInput
                placeholder="2~8글자"
                type="text"
                value={nickname}
                onChange={onNickNameHandler}
              />

              <label className="idPwBtn">Password :</label>
              <StSignUpInput
                type="password"
                value={password}
                onChange={onPasswordHandler}
              />
              <label className="idPwBtn">Re-enter Password :</label>
              <StSignUpInput
                type="password"
                value={reEnterPassword}
                onChange={onReEnterPasswordHandler}
              />
            </StSignUpDiv>
            <button
              onClick={() => navigate("/Login")}
              style={{ marginRight: "5px" }}
            >
              이전
            </button>
            <button style={{ marginLeft: "5px" }} type="submit">
              회원가입
            </button>
          </StSignUpForm>
        </StLoginDivBox>
      </StLoginDivFull>
    </>
  );
};

export default SignUp;

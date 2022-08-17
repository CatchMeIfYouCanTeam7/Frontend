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
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //오류메시지 상태저장
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  //유효성 검사
  const [isNickName, setIsNickName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // handler 함수들
  const EmailHandler = (event) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식이에요 : )");
      setIsEmail(true);
    }
  };

  const NickNameHandler = (event) => {
    setNickName(event.currentTarget.value);
    if (event.target.value.length < 2 || event.target.value.length >= 8) {
      setNickNameMessage("2글자 이상 8글자 이하로 입력해주세요.");
      setIsNickName(false);
    } else {
      setNickNameMessage("올바른 이름 형식입니다 :)");
      setIsNickName(true);
    }
  };

  const PasswordHandler = (event) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("숫자와 문자를 혼합하여 4~8자리로 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  };

  const ReEnterPasswordHandler = (event) => {
    const passwordConfirmCurrent = event.target.value;
    setPasswordConfirm(passwordConfirmCurrent);

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ");
      setIsPasswordConfirm(false);
    }
  };

  const SubmitHandler = async (event) => {
    //태그의 기본 기능으로 리프레쉬 되는 것을 방지.
    event.preventDefault();
    console.log(email, nickname, password, passwordConfirm);
    await axios
      .post(process.env.REACT_APP_URL + "/api/members/signup", {
        email: email,
        nickname: nickname,
        password: password,
        passwordConfirm: passwordConfirm,
      })
      .then((res) => {
        // console.log(res);
        // console.log(res.data.success);
        // console.log(typeof(res.data.success))
        console.log("서버연동 성공");
        if (res.data.success === true) {
          alert("회원가입을 축하드립니다^^");
          navigate("/login");
        } else {
          alert("회원가입을 실패하였습니다");
        }
      })
      .catch((error) => {
        alert("Error", error.message);
      });
  };

  const emailCheck = () => {
    axios
      .get(process.env.REACT_APP_URL + "/api/members/email-check", {
        params: { email: email },
      })
      .then((res) => {
        console.log(res.data.success);
        if(res.data.success===true){
        alert(res.data.data)
        }else
        alert(res.data.error.message)
      })
      .catch((error) => {
        alert(error.message)
      });
  };

  const nickNameCheck = async() => {
    await axios
      .get(process.env.REACT_APP_URL + "/api/members/nickname-check", {
        params: { nickname: nickname },
      })
      .then((res) => {
        console.log(res.data.success);
        if(res.data.success===true){
        alert(res.data.data)
        }else
        alert(res.data.error.message)
      })
      .catch((error) => {
        alert(error.message)
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
              <button
                type="button"
                onClick={emailCheck}
                style={{ width: "80px" }}
              >
                중복확인
              </button>
              {email.length > 0 && (
                <span className={`message ${isEmail ? "success" : "error"}`}>
                  {emailMessage}
                </span>
              )}

              <label>Nickname :</label>
              <StSignUpInput
                placeholder="2~8글자"
                type="text"
                value={nickname}
                onChange={NickNameHandler}
              />
              <button
                type="button"
                onClick={nickNameCheck}
                style={{ width: "80px" }}
              >
                중복확인
              </button>
              {nickname.length > 0 && (
                <span className={`message ${isNickName ? "success" : "error"}`}>
                  {nickNameMessage}
                </span>
              )}

              <label className="idPwBtn">Password :</label>
              <StSignUpInput
                placeholder="숫자 문자 혼합 4~8자리"
                type="password"
                value={password}
                onChange={PasswordHandler}
              />
              {password.length > 0 && (
                <span className={`message ${isPassword ? "success" : "error"}`}>
                  {passwordMessage}
                </span>
              )}
              <label className="idPwBtn">Re-enter Password :</label>
              <StSignUpInput
                placeholder="비밀번호 확인"
                type="password"
                value={passwordConfirm}
                onChange={ReEnterPasswordHandler}
              />
              {passwordConfirm.length > 0 && (
                <span
                  className={`message ${
                    isPasswordConfirm ? "success" : "error"
                  }`}
                >
                  {passwordConfirmMessage}
                </span>
              )}
            </StSignUpDiv>
            <button
              onClick={() => navigate("/login")}
              style={{ marginRight: "5px" }}
              type="button"
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

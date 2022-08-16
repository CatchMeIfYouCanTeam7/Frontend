import { useState, useRef, useEffect } from "react";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import {
  StSection,
  StLoginDivFull,
  StLoginDivBox,
  StButtonGroup,
  StInput,
} from "./Login.styled.js";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  //포커스 맞추기위해 접속 하자마자 useref넣어볼 예정
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pw]);

  //로그인 정보 전송하고 값을 받음

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://13.125.59.80/api/members/login", {
        email: user,
        password: pw,
      })
      .then((res) => {
        console.log(res);
        console.log(res.headers.authorization);
        localStorage.setItem("accessToken", res.headers.authorization);
        console.log("성공");
        if (res.headers.authorization) {
          localStorage.setItem("accessToken", res.headers.authorization);
          setSuccess(!success);
          alert("로그인에 성공하였습니다");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("아이디와 비밀번호를 확인해 주세요");
      });

    setUser("");
    setPw("");
  };

  return (
    <>
      <Header></Header>
      <StSection>
        <StLoginDivFull>
          <StLoginDivBox>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>
            <h1 style={{ marginTop: "0px", marginBottom: "80px" }}>LOG IN</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">E-mail :&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <StInput
                placeholder="email을 입력해주세요..!"
                type="text"
                style={{ marginBottom: "30px" }}
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <br />
              <label htmlFor="password">
                Password :&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <StInput
                placeholder="password를 입력해주세요..!"
                type="password"
                style={{ marginRight: "20px" }}
                onChange={(e) => setPw(e.target.value)}
                value={pw}
                required
              />
              <StButtonGroup>
                <button 
                type="submit"
                style={{ marginRight: "5px" }}>
                  로그인
                </button>
                <button
                  type="button"
                  style={{ marginLeft: "5px" }}
                  onClick={() => navigate("/SignUp")}
                >
                  회원가입
                </button>
              </StButtonGroup>
            </form>
          </StLoginDivBox>
        </StLoginDivFull>
      </StSection>
    </>
  );
};

export default Login;

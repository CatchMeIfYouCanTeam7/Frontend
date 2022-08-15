import { useState, useRef, useEffect } from "react";
import "./Login.styled.js";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import {
  StSection,
  StLoginDivFull,
  StLoginDivBox,
  StButtonGroup,
  StInput,
} from "./Login.styled.js";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pw);
    setUser("");
    setPw("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          {alert("로그인에 성공하였습니다")}
          {navigate("/")}
        </section>
      ):(
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
              <label htmlFor="username">
                E-mail :&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <StInput
                placeholder="email을 입력해주세요..!"
                type="text"
                style={{ marginBottom: "30px" }}
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <br/>
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
                <button style={{ marginRight: "5px" }}>로그인</button>
                <button
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
      )}
    </>
  );
};

export default Login;

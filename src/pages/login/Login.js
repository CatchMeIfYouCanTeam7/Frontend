import { useState, useRef, useEffect } from "react";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import {
  StSection,
  StLoginDivFull,
  StLoginDivBox,
  StInput,
} from "./Login.styled.js";
import axios from "axios";
import Button from "../../components/button/Button";

const Login = () => {
  const navigate = useNavigate();
  //포커스 맞추기위해 접속 하자마자 useref넣어볼 예정
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pw]);

  //로그인 정보 전송하고 값을 받음

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(process.env.REACT_APP_URL + "/api/members/login", {
        email: user,
        password: pw,
      })
      .then((res) => {
        console.log(res);

        console.log(res.data.success);
        console.log(res.headers.authorization);
        if (res.headers.authorization) {
          localStorage.setItem(
            "accessToken" + res.data.data.id,
            JSON.stringify({
              auth: res.headers.authorization,
              expireTime: +res.headers["access-token-expire-time"],
            })
          );
          alert("로그인에 성공하였습니다");
          navigate("/", { state: { userData: res.data.data } });
        }
        else if(res.data.success===false){
          alert(res.data.error.message)
        }
      })
      .catch((error) => {
        console.log(error);
        alert("아이디와 비밀번호를 확인해 주세요");
      });
  };

  return (
    <>
      <Header/>
      <StSection>
        <StLoginDivFull>
          <StLoginDivBox>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>
            <h1 style={{ marginTop: "0px", marginBottom: "30px" }}>LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username" style={{textaligt:"left", widrh:"264px"}} >E-mail</label>
              <br />
              <StInput
                type="text"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <br />
              <label htmlFor="password">
                Password
              </label>
              <br />
              <StInput
                type="password"
                onChange={(e) => setPw(e.target.value)}
                value={pw}
                required
              />
              <br/>
                <Button type="submit" style={{marginTop:"16px"}}>
                  LOGIN
                </Button>
                <p
                  type="button"
                  // style={{width:"270px"}}
                  onClick={() => navigate("/SignUp")}
                >회원가입</p>
            </form>
          </StLoginDivBox>
        </StLoginDivFull>
      </StSection>
    </>
  );
};

export default Login;

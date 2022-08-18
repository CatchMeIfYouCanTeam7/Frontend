import { useState, useRef, useEffect } from "react";
import { createPath, useNavigate } from "react-router-dom";
import {
  StSection,
  StLoginDivFull,
  StLoginDivBox,
  StInput,
  StCatchLogo,
  StLabel,
  StSpan,
  StTitle
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
        alert("아이디와 비밀번호를 확인해 주세요");
      });
  };

  return (
    <>
    <StCatchLogo onClick ={()=>{navigate("/")}}/>
      <StSection>
        <StLoginDivFull>
          <StLoginDivBox>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>
            <StTitle className="title">LOGIN</StTitle>
            <form onSubmit={handleSubmit}>
              <StLabel htmlFor="username"
              style={{color:"white",
              marginBottom:"3px",
              marginLeft:"5px"}} >
              E-mail
                </StLabel>
              <StInput
                type="text"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <br />
              <StLabel htmlFor="password"
              style={{color:"white",
              marginBottom:"3px",
              marginLeft:"5px"
              }}>
              Password
              </StLabel>
              <StInput
                type="password"
                onChange={(e) => setPw(e.target.value)}
                value={pw}
                required
              />
              <br/>
                <Button type="submit" 
                style={{marginTop:"16px"
                ,width:"264px"
                ,height: "60px"
                ,color: "#5357f6"
                ,fontSize: "23px"
                ,border: "6px solid black"
                ,borderRadius: "12px"
                ,fontFamily: 'Rammetto One, cursive' 
                }}>
                  LOGIN
                </Button>
                <StSpan
                  type="button"
                  onClick={() => navigate("/SignUp")}
                  style={{fontFamily: 'Jua, sans-serif'}}
                >회원가입</StSpan>

            </form>
          </StLoginDivBox>
        </StLoginDivFull>
      </StSection>
    </>
  );
};

export default Login;

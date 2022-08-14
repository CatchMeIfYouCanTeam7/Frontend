import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import { useNavigate} from "react-router-dom";
import { StLoginDivFull, StLoginDivBox } from "../login/Login.styled";
import { StSignUpInput, StSignUpTable, StSignUpDiv } from "./SignUp.styled";


const SignUp = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: '',
    nickName: '', 
    password: '',
    password2: '',
  });
  // const { nickName, email, password, password2} = inputValue;

  // const register= ()=>{
  //   axios
  // .post('http://localhost:1337/api/auth/local/register', {   
  //   email: email,
  //   nickName: nickName,
  //   password: password,
  // })
  // .then(response => {
  //   // Handle success.
  //   console.log('Well done!');
  //   console.log('User profile', response.data.user);
  //   console.log('User token', response.data.jwt);
  //   localStorage.setItem('token', response.data.jwt)
  //   navigate("/")
  // })
  // .catch(error => {
  //   // Handle error.
  //   console.log('An error occurred:', error.response);
  // });
  // }

  const handleInput = event => {
    const {name, value} = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };


  return (
    <>
      <Header>SIGN UP</Header>
      <StLoginDivFull>
        <StLoginDivBox>
          <StSignUpTable>
            <h1>SIGN UP</h1>
            <StSignUpDiv>
              <tr>
                E-mail :&nbsp;&nbsp;
                <StSignUpInput 
                placeholder="email을 입력해주세요" 
                name="email"
                onChanege={handleInput} 
                />
              </tr>
              <tr>
                Nickname :&nbsp;&nbsp;
                <StSignUpInput placeholder="2~8글자"
                name="nickName"
                onChange={handleInput} />
              </tr>
              <tr className="idPwBtn">
                Password :&nbsp;&nbsp;&nbsp;
                <StSignUpInput 
                name="password"
                onChange={handleInput}
                />
              </tr>
              <tr className="idPwBtn">
                password2
                <span>:&nbsp;&nbsp;&nbsp;</span>
                <StSignUpInput
                name="password2"
                onChange={handleInput}/>
              </tr>
            </StSignUpDiv>
            <button onClick={(
            ) => navigate(-1)} 
            style={{marginRight:"5px"}}>
              이전
              </button>
            <button 
            // onClick={()=>{register();}}
            style={{marginLeft:"5px"}}>회원가입</button>
          </StSignUpTable>
        </StLoginDivBox>
      </StLoginDivFull>
    </>
  );
};

export default SignUp;

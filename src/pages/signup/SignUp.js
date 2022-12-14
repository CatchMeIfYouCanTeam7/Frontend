import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	StLoginDivFull,
	StLoginDivBox,
	StCatchLogo,
	StInput,
	StTitle,
} from '../login/Login.styled';
import { StSignUpForm, StSignUpDiv } from './SignUp.styled';
import Button from '../../components/button/Button';
import axios from 'axios';

const SignUp = () => {
	const navigate = useNavigate();
	const userRef = useRef();
	useEffect(() => {
		userRef.current.focus();
	}, []);

	const [email, setEmail] = useState('');
	const [nickname, setNickName] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	//오류메시지 상태저장
	const [nickNameMessage, setNickNameMessage] = useState('');
	const [emailMessage, setEmailMessage] = useState('');
	const [passwordMessage, setPasswordMessage] = useState('');
	const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

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
			setEmailMessage('이메일 형식을 확인해주세요');
			setIsEmail(false);
		} else {
			setEmailMessage('올바른 이메일 형식이에요 :)');
			setIsEmail(true);
		}
	};

	const NickNameHandler = (event) => {
		setNickName(event.currentTarget.value);
		if (event.target.value.length < 2 || event.target.value.length >= 8) {
			setNickNameMessage('2글자 이상 8글자 이하로 입력해주세요');
			setIsNickName(false);
		} else {
			setNickNameMessage('올바른 이름 형식입니다 :)');
			setIsNickName(true);
		}
	};

	const PasswordHandler = (event) => {
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
		const passwordCurrent = event.target.value;
		setPassword(passwordCurrent);

		if (!passwordRegex.test(passwordCurrent)) {
			setPasswordMessage('숫자 문자 혼합 4~8자리를 입력해주세요');
			setIsPassword(false);
		} else {
			setPasswordMessage('안전한 비밀번호에요 : )');
			setIsPassword(true);
		}
	};

	const ReEnterPasswordHandler = (event) => {
		const passwordConfirmCurrent = event.target.value;
		setPasswordConfirm(passwordConfirmCurrent);

		if (password === passwordConfirmCurrent) {
			setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )');
			setIsPasswordConfirm(true);
		} else {
			setPasswordConfirmMessage('비밀번호가 일치하지 않아요');
			setIsPasswordConfirm(false);
		}
	};

	const SubmitHandler = async (event) => {
		//태그의 기본 기능으로 리프레쉬 되는 것을 방지.
		event.preventDefault();
		await axios
			.post(process.env.REACT_APP_URL + '/api/members/signup', {
				email: email,
				nickname: nickname,
				password: password,
				passwordConfirm: passwordConfirm,
			})
			.then((res) => {
				if (res.data.success === true) {
					alert('회원가입을 축하드립니다^^');
					navigate('/login');
				} else {
					alert('회원가입을 실패하였습니다');
				}
			})
			.catch((error) => {
				alert('Error', error.message);
			});
	};

	const emailCheck = () => {
		axios
			.get(process.env.REACT_APP_URL + '/api/members/email-check', {
				params: { email: email },
			})
			.then((res) => {
				if (res.data.success === true) {
					alert(res.data.data);
				} else alert(res.data.error.message);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const nickNameCheck = async () => {
		await axios
			.get(process.env.REACT_APP_URL + '/api/members/nickname-check', {
				params: { nickname: nickname },
			})
			.then((res) => {
				if (res.data.success === true) {
					alert(res.data.data);
				} else alert(res.data.error.message);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<>
			<StCatchLogo
				onClick={() => {
					navigate('/');
				}}
			/>
			<StLoginDivFull>
				<StLoginDivBox>
					<StTitle>SIGN UP</StTitle>
					<StSignUpForm onSubmit={SubmitHandler}>
						<StSignUpDiv>
							<div className="signUpItem">
								<label style={{ color: 'white' }}>E-mail</label>
								<div style={{ display: 'flex' }}>
									<StInput
										placeholder="email을 입력해주세요"
										type="email"
										ref={userRef}
										Value={email}
										onChange={EmailHandler}
									/>
									<Button
										type="button"
										onClick={emailCheck}
										style={{
											width: '80px',
											hegiht: '10px',
											position: 'absolute',
											borderRadius: '0 10px 10px 0',
											border: 'solid black',
											borderWidth: '2px 4px 3.5px 5px',
											marginLeft: '184px',
											marginTop: '3.4px',
											fontSize: '15px',
											fontFamily: 'Jua, sans-serif',
										}}
									>
										중복확인
									</Button>
								</div>
								{email.length > 0 && (
									<span className={`message ${isEmail ? 'success' : 'error'}`}>
										{emailMessage}
									</span>
								)}
							</div>

							<div className="signUpItem">
								<label style={{ color: 'white' }}>Nickname</label>
								<div style={{ display: 'flex' }}>
									<StInput
										placeholder="2~8글자"
										type="text"
										value={nickname}
										onChange={NickNameHandler}
									/>
									<Button
										type="button"
										onClick={nickNameCheck}
										style={{
											width: '80px',
											hegiht: '10px',
											position: 'absolute',
											borderRadius: '0 10px 10px 0',
											border: 'solid black',
											borderWidth: '2px 4px 3.5px 5px',
											marginLeft: '184px',
											marginTop: '3.5px',
											fontSize: '15px',
											fontFamily: 'Jua, sans-serif',
										}}
									>
										중복확인
									</Button>
								</div>
								{nickname.length > 0 && (
									<span
										className={`message ${isNickName ? 'success' : 'error'}`}
									>
										{nickNameMessage}
									</span>
								)}
							</div>

							<div className="signUpItem">
								<label style={{ color: 'white' }} className="idPwBtn">
									Password
								</label>
								<StInput
									placeholder="문자,숫자 혼합 4~8자리"
									type="password"
									value={password}
									onChange={PasswordHandler}
								/>
								{password.length > 0 && (
									<span
										className={`message ${isPassword ? 'success' : 'error'}`}
									>
										{passwordMessage}
									</span>
								)}
							</div>

							<div className="signUpItem">
								<label style={{ color: 'white' }} className="idPwBtn">
									Re-enter Password
								</label>
								<StInput
									style={{ marginBottom: '0px' }}
									placeholder="비밀번호 확인"
									type="password"
									value={passwordConfirm}
									onChange={ReEnterPasswordHandler}
								/>
								{passwordConfirm.length > 0 && (
									<span
										className={`message ${
											isPasswordConfirm ? 'success' : 'error'
										}`}
									>
										{passwordConfirmMessage}
									</span>
								)}
							</div>
						</StSignUpDiv>

						<div style={{ marginTop: '10px', width: '264px' }}>
							<Button
								id="signUpBtn"
								style={{
									marginRight: '11px',
									width: '120px',
									height: '60px',
									border: '6px solid black',
									borderRadius: '14px',
								}}
								type="submit"
							>
								SIGN UP
							</Button>
							<Button
								id="logInBtn"
								onClick={() => navigate('/login')}
								style={{
									marginLeft: '11px',
									height: '60px',
									width: '120px',
									border: '6px solid black',
									borderRadius: '14px',
								}}
								type="button"
							>
								LOG IN
							</Button>
						</div>

						{/* <div style={{ marginTop: '20px', width: '264px' }}>
							<Button
								id="signUpBtn"
								style={{
									marginRight: '10px',
									width: '120px',
									fontFamily: 'Rammetto One, cursive',
									color: '#5357f6',
								}}
								type="submit"
							>
								SIGN UP
							</Button>
							<Button
								id="logInBtn"
								onClick={() => navigate('/login')}
								style={{
									marginLeft: '10px',
									width: '120px',
									fontFamily: 'Rammetto One, cursive',
									color: '#5357f6',
								}}
								type="button"
							>
								LOG IN
							</Button>
						</div> */}
					</StSignUpForm>
				</StLoginDivBox>
			</StLoginDivFull>
		</>
	);
};

export default SignUp;

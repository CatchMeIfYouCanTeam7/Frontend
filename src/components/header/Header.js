import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import axios from 'axios';

// Style import
import { CatchLogo, StHeader } from './Header.styled';

const Header = ({ userId }) => {
	const navigate = useNavigate();

	const LogoutHandler = () => {
		// console.log(JSON.parse(localStorage.getItem("accessToken" + userId)));
		axios
			.get(process.env.REACT_APP_URL + '/api/auth/members/logout', {
				headers: {
					Authorization: JSON.parse(
						localStorage.getItem('accessToken' + userId)
					).auth,
				},
			})
			.then((res) => {})
			.catch((error) => {});

		localStorage.removeItem('accessToken' + userId);

		alert('로그아웃 하였습니다!');
		navigate('/');
	};

	return (
		<StHeader>
			<CatchLogo onClick={() => navigate('/')} />
			<div style={{ marginLeft: 'auto' }}></div>
			&nbsp;&nbsp;
			{localStorage.length > 0 ? (
				<Button
					id="SignUpBtn"
					onClick={LogoutHandler}
					className="signUpBox"
					style={{ marginRight: '20px', width: '100px' }}
				>
					LOG OUT
				</Button>
			) : (
				<>
					<Button
						id="logInBtn"
						onClick={() => navigate('/Login')}
						className="signUpBox"
						style={{ marginRight: '20px', width: '100px' }}
					>
						LOG IN
					</Button>
					<Button
						id="signUpBtn"
						onClick={() => navigate('/SignUp')}
						className="signUpBox"
						style={{ marginRight: '20px', width: '100px' }}
					>
						SIGN UP
					</Button>
				</>
			)}
			;
		</StHeader>
	);
};

export default Header;

import React from "react";
import { useNavigate } from 'react-router-dom';

// Style import
import {
  CatchLogo,
  StHeader,
} from './Header.styled'

const Header = () => {
  const navigate = useNavigate();

  return (
		<StHeader>
			<CatchLogo onClick={() => navigate('/')} />
			<div style={{ marginLeft: 'auto' }}></div>
			&nbsp;&nbsp;
			<h3 onClick={()=> navigate('/SignUp')} className="signUpBox" style={{ marginRight: '20px' }}>
				회원가입
			</h3>
		</StHeader>
	);
};

export default Header;

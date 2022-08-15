import styled from 'styled-components';
import CMIYC_Logo from './CMIYC_Logo.png';

export const StHeader = styled.div`
	width: 99.655%;
	height: 100px;
	display: flex;
	align-items: center;
	border: 2px solid black;
`;

export const CatchLogo = styled.div`
	position: absolute;
	background-image: url(${CMIYC_Logo});
	background-size: contain;
	background-repeat: no-repeat;
	top: 30px;
	left: 50px;
	width: 240px;
	height: 100px;
	&:hover {
		cursor: pointer;
	}
`;
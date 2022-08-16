import styled from 'styled-components';

export const PostingWrap = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
`;

export const PostingContainer = styled.div`
	width: 30%;
	min-width: 500px;
	height: 70%;
	min-height: 700px;
	margin: auto;
	text-align: center;

	border: 6px solid black;
	border-radius: 15px;

	background-color: #5357f6;
	position: relative;
`;

export const PostingHeader = styled.div`
	margin: 20px;
	/* background-color: aqua; */

	display: flex;
	justify-content: space-between;
`;

export const PostingImgUproad = styled.div`
	button {
		margin: 20px;
	}

	img {
		width: 100%;
	}
`;

export const InputWrap = styled.div`
	margin: 30px 10px;

	display: flex;
	justify-content: space-between;

	input {
		width: 8rem;
		margin: auto 10px;
		padding: 5px;
		background-color: aliceblue;
		border: 0px solid #ffffff;
		border-radius: 5px;
	}
`;

export const Preview = styled.img`
	width: 100%;
	max-width: 400px;
	height: 260px;
	border: 6px solid black;
`;

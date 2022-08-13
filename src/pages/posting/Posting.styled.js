import styled from 'styled-components';


export const PostingWrap = styled.div`
	width: 100vw;
	height: 90vh;
	display: flex;
`;

export const PostingContainer = styled.div`
	width: 570px;
	height: 600px;
	margin: auto;
	padding: 20px;

	text-align: center;

	border: 1px solid black;
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
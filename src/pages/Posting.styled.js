import styled from 'styled-components';

export const DetailWrap = styled.div`
	width: 100vw;
	height: 90vh;
	display: flex;
`;

export const DetailContainer = styled.div`
	width: 570px;
	height: 825px;
	margin: auto;
	padding: 20px;

	text-align: center;

	border: 1px solid black;
`;

export const DetailHeader = styled.div`
	margin: 20px;
	/* background-color: aqua; */

	display: flex;
	justify-content: space-between;
`;

export const DetailContent = styled.div`
	button {
		margin: 20px;
	}

	img {
		width: 100%;
	}
`;

export const CommentWrite = styled.div`
	margin: auto 20px;

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

export const CommentListContainer = styled.div`
	text-align: left;
	margin: 20px;
`;

export const CommentWrap = styled.div`
	/* background-color: blue; */
	margin: 20px auto;

	display: flex;
	justify-content: space-between;
`;
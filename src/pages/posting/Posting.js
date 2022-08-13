// React import
import React from 'react';

// Package import
import { useNavigate } from 'react-router-dom';

// Component import
import Header from '../../components/header/Header';

// Styled import
import {
	PostingWrap,
	PostingContainer,
	PostingHeader,
	PostingImgUproad,
	InputWrap,
} from './Posting.styled';

const Posting = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<PostingWrap>
				<PostingContainer>
					<PostingHeader>
						<button onClick={() => navigate(-1)}>뒤로가기</button>
						<button>완료</button>
						<button>취소</button>
					</PostingHeader>
					<PostingImgUproad>
						<img
							src="http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg"
							alt=""
						/>
					</PostingImgUproad>
					<div>
						<InputWrap>
							<label htmlFor="nickname">힌트</label>
							<input type="text" />
							<label htmlFor="comment">정답</label>
							<input type="text" />
							<button onClick={() => navigate('/detail')}>등록</button>
						</InputWrap>
					</div>
				</PostingContainer>
			</PostingWrap>
		</>
	);
};

export default Posting;

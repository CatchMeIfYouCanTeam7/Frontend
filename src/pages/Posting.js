// React import
import React from 'react';

// Package import
import { useNavigate } from 'react-router-dom';

// Component import
import Header from '../components/header/Header';

// Styled import
import {
	PostingWrap,
	DetailContainer,
	DetailHeader,
	DetailContent,
	CommentWrite,
} from './Posting.styled';

const Posting = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<Posting>
				<DetailContainer>
					<DetailHeader>
						<button onClick={() => navigate(-1)}>뒤로가기</button>
						<button>완료</button>
						<button>취소</button>
					</DetailHeader>
					<DetailContent>
						<img
							src="http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg"
							alt=""
						/>
					</DetailContent>
					<div>
						<CommentWrite>
							<label htmlFor="nickname">힌트</label>
							<input type="text" />
							<label htmlFor="comment">정답</label>
							<input type="text" />
							<button>등록</button>
						</CommentWrite>
					</div>
				</DetailContainer>
			</ㅖ>
		</>
	);
};

export default Posting;

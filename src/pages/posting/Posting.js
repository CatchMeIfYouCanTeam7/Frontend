// React import
import React from 'react';

// Package import
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addPosting } from '../../redux/modules/posting'

// Component import
import Header from '../../components/header/Header';
// Styled import
import {
	PostingWrap,
	PostingContainer,
	PostingHeader,
	InputWrap,
} from './Posting.styled';
import { useSelector } from 'react-redux';

const Posting = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
		const questionList = useSelector((state) => state.posting.postingList);
		console.log(questionList);
	//  const onClick = () => {
	// 		if (window.confirm('정말 삭제합니까?')) {
	// 			alert('삭제되었습니다.');
	// 		} else {
	// 			alert('취소합니다.');
	// 		}
	// 	};

	// Img 업로드
	// const fileInput = React.useRef(null);
	// const handleButtonClick = (e) => {
	// 	fileInput.current.click();
	// };
	// const handleChange = (e) => {};

	// 추가 테스트
	const [fileImage, setFileImage] = useState('');

	const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		// @ts-ignore
		setFileImage(URL.createObjectURL(event.target.files[0]));
	};

	const deleteFileImage = () => {
		URL.revokeObjectURL(fileImage);
		setFileImage('');
	};

	const [hint, setHint] = useState('');

	const [answer, setAnswer] = useState('');
	
//useSelector는 reducer의 모든 정보를 가져오는 것 
	// const posting = useSelector((state) => state.posting.QUESTION.result)
	// console.log('aaaa', posting);

	// 등록 버튼 click시 confirm
	const onClickhandle = () => {
		if (hint === '' || answer === '') {
			window.alert('힌트와 정답 모두 입력해 주세요!');
		} else {
			if (window.confirm('등록하시겠습니까?')) {
				window.location.href = 'http://localhost:3000/detail';
			}
		}
	};

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

					<h1>이미지 업로드 </h1>
					<div
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<input
							name="imggeUpload"
							type="file"
							accept="image/*"
							onChange={saveFileImage}
						/>
					</div>
					<div>
						<h1>미리보기 이미지</h1>
					</div>
					<div>
						{fileImage && (
							<img alt="sample" src={fileImage} style={{ margin: 'auto' }} />
						)}
						<button
							style={{
								width: '50px',
								height: '30px',
								cursor: 'pointer',
							}}
							onClick={() => deleteFileImage()}
						>
							{' '}
							삭제{' '}
						</button>
					</div>

					{/* <React.Fragment>
						<button onClick={handleButtonClick}>파일 업로드</button>
						<input
							type="file"
							ref={fileInput}
							onChange={handleChange}
							style={{ display: 'none' }}
						/>
					</React.Fragment> */}

					{/* <PostingImgUproad>
						<img
							src="http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg"
							alt=""
						/>
					</PostingImgUproad> */}
					<div>
						<InputWrap>
							<label htmlFor="nickname">힌트</label>
							<input
								type="text"
								placeholder="힌트 입력..."
								value={hint}
								onChange={(e) => setHint(e.target.value)}
								multiple="multiple"
							/>

							<label htmlFor="comment">정답</label>
							<input
								type="answer"
								placeholder="정답 입력..."
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
								multiple="multiple"
							/>

							<button
								onClick={() => {
									onClickhandle();
								}}
							>
								등록
							</button>
						</InputWrap>
					</div>
				</PostingContainer>
			</PostingWrap>
		</>
	);
};

export default Posting;

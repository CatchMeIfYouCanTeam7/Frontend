// React import
import React from "react";

// Package import

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addPosting } from '../../redux/modules/posting';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Component import
import Header from '../../components/header/Header';

// Styled import
import {
	PostingWrap,
	PostingContainer,
	PostingHeader,
	InputWrap,
	Preview,
} from './Posting.styled';


const Posting = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [fileImage, setFileImage] = useState('');
	const [hint, setHint] = useState('');
	const [answer, setAnswer] = useState('');

	// 수정
	const [newText, setNewText] = useState();

	
	const QUESTION = useSelector((state) => state.posting.QUESTION);
	console.log(QUESTION);
	
	const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFileImage(URL.createObjectURL(event.target.files[0]));
	};

	const deleteFileImage = () => {
		URL.revokeObjectURL(fileImage);
		setFileImage('');
	};

	//useSelector는 reducer의 모든 정보를 가져오는 것
	// const posting = useSelector((state) => state.posting.QUESTION.result)
	// console.log('aaaa', posting);

	// 등록 버튼 click시 confirm
	const onClickHandler = () => {
		if (hint === '' || answer === '') {
			window.alert('힌트와 정답 모두 입력해 주세요!');
		} else {
			if (window.confirm('등록하시겠습니까?')) {
				window.location.href = 'http://localhost:3000/detail';
			}
		}
	console.log(QUESTION.length);

		const newQuestion = {
			questionId: QUESTION.result.length + 1,
			userNickname: 'nick1',
			imageUrl:
				'http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg',
			hint: hint,
			answer: answer,
			createdAt: '2020-04-11T11:12:30.686',
		};

		dispatch(addPosting(newQuestion));
	};

	// const onClickEditButton = () => {
	// 	setEdited(true);	
	// }


	return (
		<>
			<Header />
			<PostingWrap>
				<PostingContainer>
					<PostingHeader>
						<button onClick={() => navigate(-1)}>뒤로가기</button>
						{/* <EditDoneButton> */}
							<button>완료</button>
							<button onClick={() => navigate(-1)}>취소</button>
						{/* </EditDoneButton> */}
					</PostingHeader>

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
						<div>
							<Preview
								src={
									fileImage
										? fileImage
										: // : '../../image/preview_img.png'
										  'preview_img.png'
								}
								alt=""
							/>
							{/* {fileImage && (
								<img
									alt="sample"
									src={fileImage}
									// src={
									// 	fileImage
									// 		? fileImage
									// 		: "https://velog.velcdn.com/images/hahbr88/post/67aab3ec-2a82-425e-bd2d-8108805e8389/image.png"
									// }
									style={{
										margin: 'auto',
										backgroundColor: '#efefef',
										width: '200px',
										height: '170px',
									}}
								/>
							)} */}
						</div>
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
								placeholder="8글자 제한"
								value={hint}
								onChange={(e) => setHint(e.target.value)}
								multiple="multiple"
							/>

							<label htmlFor="comment">정답</label>
							<input
								type="answer"
								placeholder="5글자 제한"
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
								multiple="multiple"
							/>

							<button onClick={onClickHandler}>등록</button>
						</InputWrap>
					</div>
				</PostingContainer>
			</PostingWrap>
		</>
	);
};

export default Posting;

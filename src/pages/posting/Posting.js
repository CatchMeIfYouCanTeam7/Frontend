// React import
import React, { useEffect, useState, useRef } from 'react';

// Package import
import { useLocation, useNavigate } from 'react-router-dom';
import {
	asyncEditQuestion,
	asyncPostQuestion,
	asyncRemoveQuestion,
} from '../../redux/modules/posting';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

// Component import
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';

// Styled import
import {
	PostingWrap,
	PostingContainer,
	PostingHeader,
	InputWrap,
	Preview,
	ImageUproadButton,
} from './Posting.styled';

import previewImg from '../../image/preview_img.png';

const Posting = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// 상세화면에서 수정 버튼 클릭 시 문제 데이터 보냄
	const location = useLocation();

	const question = location.state.question ? location.state.question : '';
	const userData = location.state.userData;

	const [fileImage, setFileImage] = useState(question ? question.imgUrl : '');
	const [img, setImg] = useState('');
	const [hint, setHint] = useState(question ? question.hint : '');
	const [answer, setAnswer] = useState(question ? question.answer : '');

	const QUESTION = useSelector((state) => state.posting.questions);

	const fileInput = useRef();

	const saveFileImage = (e) => {
		const img = e.target.files[0];
		setFileImage(URL.createObjectURL(img));
		setImg(img);
	};

	const deleteFileImage = () => {
		URL.revokeObjectURL(fileImage);
		setFileImage('');
		fileInput.current.value = '';
	};

	const onRemoveQuestionHandler = () => {
		if (window.confirm('삭제하시겠습니까?')) {
			dispatch(
				asyncRemoveQuestion({
					questionId: question.id,
					userId: userData.id,
				})
			);
			navigate('/', { state: { userData: userData } });
		}
	};

	const onClickHandler = () => {
		if (hint === '' || answer === '' || fileImage === '') {
			window.alert('힌트와 정답 이미지를 모두 입력해 주세요!');
		} else {
			if (window.confirm('등록하시겠습니까?')) {
				let formData = new FormData();

				const data = {
					hint: hint,
					answer: answer,
				};

				console.log(hint, answer);
				formData.append('multipartFile', img);
				formData.append(
					'questionRequestDto',
					new Blob([JSON.stringify(data)], {
						type: 'application/json',
					})
				);

				for (const keyValue of formData) console.log(keyValue); 

				if (question) {
					dispatch(
						asyncEditQuestion({
							formData: formData,
							userId: userData.id,
							questonId: question.id,
						})
					);
				} else {
					dispatch(
						asyncPostQuestion({
							formData: formData,
							userId: userData.id,
						})
					);
				}

				console.log('finish dispatch post question');
				navigate('/', { state: { userData: userData } });
			}
		}
		// console.log(QUESTION.length);

		const newQuestion = {
			questionId: QUESTION.length + 1,
			userNickname: 'nick1',
			imageUrl:
				'http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg',
			hint: hint,
			answer: answer,
			createdAt: '2020-04-11T11:12:30.686',
		};
	};
	return (
		<>
			<Header userId={userData.id} />
			<PostingWrap>
				<PostingContainer>
					<PostingHeader>
						<Button id="backBtn" onClick={() => navigate(-1)}></Button>

						<div>
							{question ? (
								<Button id="editPageBtn" onClick={onRemoveQuestionHandler}>
									글 삭제
								</Button>
							) : null}
							<Button
								id="editPageBtn"
								onClick={() => navigate(-1)}
								style={{ backgroundColor: '#bababa' }}
							>
								취소
							</Button>
						</div>
					</PostingHeader>

					<div>
						<Preview src={fileImage ? fileImage : previewImg} alt="" />
					</div>
					
					<ImageUproadButton style={{ marginTop: '10px' }}>
						<label
							style={{
								backgroundColor: '#ef8b7c',
								color: '#000000',
								border: '5px solid black',
								borderRadius: '12px',
								fontSize: '17px',
								width: '78px',
								height: '20px',
								margin: '0 auto',
								textAlign: 'center',
								lineHeight: '23px',
							}}
							className="input file-button"
							htmlFor="input-file"
						>
							파일 선택...
						</label>
						<input
							id="input-file"
							style={{ color: 'white', display: 'none' }}
							name="imgUpload"
							type="file"
							accept="image/*"
							onChange={saveFileImage}
							ref={fileInput}
						/>
					</ImageUproadButton>
					<InputWrap>
						<span>
							<label htmlFor="nickname">힌트:</label>
							<input
								type="text"
								placeholder="10글자 제한"
								value={hint}
								onChange={(e) => setHint(e.target.value)}
								multiple="multiple"
								maxLength="10"
							/>
						</span>
						<span>
							<label htmlFor="comment">정답:</label>
							<input
								type="answer"
								placeholder="5글자 제한"
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
								multiple="multiple"
								maxLength="5"
							/>
						</span>
						<span>
							<Button
								id="PostingBtn"
								onClick={onClickHandler}
								style={{ width: '55px', height: '34px', fontSize: '18px' }}
							>
								{question ? '저장' : '등록'}
							</Button>
						</span>
					</InputWrap>
				</PostingContainer>
			</PostingWrap>
		</>
	);
};

export default Posting;

// React import
import React, { useEffect, useState } from 'react';

// Package import
import { useLocation, useNavigate } from 'react-router-dom';
import { addPosting, asyncPostQuestion } from '../../redux/modules/posting';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

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
	PostingHeaderWrap,
} from './Posting.styled';

const Posting = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// 상세화면에서 수정 버튼 클릭 시 문제 데이터 보냄
	const location = useLocation();
  console.log(location);
  // location.state가 값이 있다면 question을 questIon이라는 변수에 넣은것.
	const question = location.state.question ? location.state.question : '';
	const userId = location.state.userId;
	console.log(question);

	const [fileImage, setFileImage] = useState('');
	const [img, setImg] = useState('');
	const [hint, setHint] = useState('');
	const [answer, setAnswer] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
	const [updatedPost, setUpdatedPost] = useState('');
	//[] 업데이트 딱 한번만 한다. 그 빈배열 안에 값을 집어 넣으면 그 값이 변경될 때 마다 업데이트 함
	//fileImage를 지워줬으니까 바로 적용시켜!

	// 수정
	const [modify, setModify] = useState(false);
	function onClickHide() {
		setModify((modify) => !modify);
	}

  const hintRef = useRef();
	const answertRef = useRef();


    const onMoveDetailHandler = () => {
			navigate(`/Posting/`, { state: { question: question } });
		};

	const QUESTION = useSelector((state) => state.posting.questions);
	console.log(QUESTION);

	// const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setFileImage(URL.createObjectURL(event.target.files[0]));
	// };

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

	//useSelector는 reducer의 모든 정보를 가져오는 것
	// const posting = useSelector((state) => state.posting.QUESTION.result)
	// console.log('aaaa', posting);

	// 등록 버튼 click시 confirm
	const onClickHandler = () => {
		if (hint === '' || answer === '' || fileImage === '') {
			window.alert('힌트와 정답 이미지를 모두 입력해 주세요!');
		} else {
			if (window.confirm('등록하시겠습니까?')) {
				// window.location.href = 'http://localhost:3000/detail';

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

				for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체

				dispatch(asyncPostQuestion({ formData: formData, userId: 2 }));
				console.log('finish dispatch post question');
			}
		}


		// console.log(QUESTION.length);

		const newQuestion = {
			questionId: QUESTION.result.length + 1,
			userNickname: 'nick1',
			imageUrl:
				'http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg',
			hint: hint,
			answer: answer,
			createdAt: '2020-04-11T11:12:30.686',
		};

		// dispatch(addPosting(newQuestion));
	};


  const changeStatus = () => {
		if (modify) {
			hintRef.current.style.backgroundColor = '#e66a2f';
			hintRef.current.style.color = '#f7f6f1';
		} else {
			hintRef.current.style.backgroundColor = '#f7f6f1';
			hintRef.current.style.color = '#000000';
		}
		hintRef.current.disabled = !hintRef.current.disabled;
		// answerRef.current.disabled = !answerRef.current.disabled;
		setModify(!modify);
	};

   const newInputData = {
			imageUrl:
				'http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg',
			hint: hint,
			answer: answer,
		};
	// const onClickEditButton = () => {
	// 	setEdited(true);
	// }

	return (
		<>
			<Header />
			<PostingWrap>
				<PostingContainer>
					<PostingHeaderWrap>
						<Button id="backBtn" onClick={() => navigate(-1)}></Button>
						<PostingHeader>
							{/* <EditDoneButton> */}
							<span>닉네임: {question.author}</span>

						</PostingHeader>
					</PostingHeaderWrap>

					<ImageUproadButton>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								margin: '0px 160px 13px 0px',
							}}
						>
							<label className="input file-button" for="input-file">
								...이미지업로드⬆️
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
						</div>
					</ImageUproadButton>

					<div>
						<Preview src={fileImage ? fileImage : 'preview_img.png'} alt="" />
					</div>

					<Button
						style={{
							cursor: 'pointer',
						}}
						id="editPostingBtn"
						onClick={() => deleteFileImage()}
					>
						삭제
					</Button>

					<div>
						<InputWrap>
							<label htmlFor="nickname">힌트</label>
							<input
								type="text"
								placeholder="10글자 제한"
								value={hint}
								onChange={(e) => setHint(e.target.value)}
								multiple="multiple"
								maxLength="10"
							/>

							<label htmlFor="comment">정답</label>
							<input
								type="answer"
								placeholder="5글자 제한"
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
								multiple="multiple"
								maxLength="5"
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

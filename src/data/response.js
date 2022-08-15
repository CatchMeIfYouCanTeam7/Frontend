export const RESP = {
	QEUSTION: {
		ok: true,
		result: [{
				questionId: 1,
				userNickname: "nick1",
				imageUrl: "/images/cancle.png",
				createdAt: "2020-04-11T11:12:30.686",
			},
			{
				questionId: 2,
				userNickname: "nick1",
				imageUrl: "/images/cancle.png",
				createdAt: "2020-04-11T11:12:30.686",
			},
			{
				questionId: 3,
				userNickname: "nick1",
				imageUrl: "/images/cancle.png",
				createdAt: "2020-04-11T11:12:30.686",
			},
		],
	},
	COMMENT: {
		ok: true,
		result: [
			{
				answerId: 1,
				userNickname: "nick1",
				comment: "정답1"
			},
			{
				answerId: 2,
				userNickname: "nick2",
				comment: "정답2"
			},
			{
				answerId: 3,
				userNickname: "nick3",
				comment: "정답3"
			},
		],
	},
	LOGIN: {
		ok: true,
		result: true
	},
	SIGNUp: {
		ok: true,
		result: true
	},
};
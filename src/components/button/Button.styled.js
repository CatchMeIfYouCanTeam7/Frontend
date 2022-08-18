import styled, { css } from "styled-components";

export const BtnContainer = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-family: "Jua", sans-serif;

  ${({ id }) => {
    switch (id) {
      case "backBtn":
        return css`
          img {
            width: 50px;
          }
        `;

      case "editPostingBtn":
      case "postingBtn":
        return css`
          width: 90px;
          height: 40px;
          font-size: 18px;
          font-weight: bold;

          color: #5337f6;
          background-color: white;

          border: 4px solid black;
          border-radius: 7px;
        `;

      case "hintBtn":
        return css`
          width: 300px;
          height: 50px;
          margin-bottom: 20px;
          font-size: 27px;
          font-weight: bold;

          background-color: #ef8b7c;

          border: 6px solid black;
          border-radius: 8px;
        `;

      case "showCommentBtn":
        return css`
          width: 110px;
          height: 30px;
          margin-bottom: 20px;

          color: white;
          font-size: 17px;
          font-weight: bold;

          hr {
            width: 83px;
            background-color: white;
            height: 2px;
            border: 0;
            margin: 1px 0px 0px 5px;
          }
        `;

      case "enrollCommentBtn":
        return css`
          width: 80px;
          height: 30px;
          color: white;
          font-size: 18px;
          border-radius: 8px;
          background-color: black;
        `;

      case "removeCommentBtn":
        return css`
          width: 50px;
          height: 25px;
          color: white;
          font-size: 15px;
          background-color: black;

          border-radius: 5px;
        `;

      case "editPageBtn":
        return css`
          width: 65px;
          height: 35px;
          margin-top: 10px;
          margin-right: 10px;
          background-color: black;
          color: white;
          font-size: 17px;
          border-radius: 8px;
        `;

      case "logInBtn":
        return css`
          width: 90px;
          height: 40px;
          font-size: 18px;
          font-weight: bold;
          color: #5337f6;
          background-color: #f9f9f9;
          border: 4px solid black;
          border-radius: 7px;
          font-family: "Rammetto One", cursive;
        `;

      case "signUpBtn":
        return css`
          width: 90px;
          height: 40px;
          font-size: 16px;
          font-weight: bold;
          color: #f9f9f9;
          background-color: #5337f6;
          border: 4px solid black;
          border-radius: 7px;
          font-family: "Rammetto One", cursive;
        `;

      case "dupBtn":
			return css`          
				width: 80px;
				height: 30px;
				position: absolute;
				border-radius:0 10px 10px 0;
				border: solid black;
				border-width: "2px 4px 3.5px 5px"
				margin-left: 184px;
				margin-top: 3.5px;
				font-family: "Jua, sans-serif";
				font-size: "14px";
				background-color: #ffc500;
			`;

      default:
        return css`
          width: 80px;
          height: 40px;
          font-size: 18px;
          font-weight: bold;
          background-color: #ffc500;
          border: 4px solid black;
          border-radius: 7px;
          font-family: "Rammetto One", cursive;
        `;
    }
  }}
`;

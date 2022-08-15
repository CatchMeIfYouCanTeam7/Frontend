import styled, { css } from "styled-components";

export const BtnContainer = styled.button`
  background-color: transparent;
  border: 0;

  ${({ id }) => {
    switch (id) {
      case "backBtn":
        return css`
          img {
            width: 50px;
            object-fit: ;
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
          background-color: #ffc500;

          border: 4px solid black;
          border-radius: 7px;
        `;

      case "hintBtn":
        return css`
          width: 200px;
          height: 50px;
          margin: 20px;
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
            background-color: white;
            height: 2px;
            border: 0;
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

      default:
        return css`
          width: 80px;
          height: 40px;
          font-size: 18px;
          font-weight: bold;

          background-color: #ffc500;

          border: 4px solid black;
          border-radius: 7px;
        `;
    }
  }}
`;

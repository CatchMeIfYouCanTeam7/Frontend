import React from "react";
import { BtnContainer } from "./Button.styled";

const Button = (props) => {
  const checkId = (id) => {
    switch (id) {
      case "backBtn":
        return (
          <img src={require("../../image/back_button.png")} alt="backBtn" />
        );

      case "showCommentBtn":
        return (
          <div>
            {props.children}
            <hr />
          </div>
        );

      case "enrollCommentBtn":
      case "removeCommentBtn":
      case "editPostingBtn":
      case "postingBtn":
      case "hintBtn":
      default:
        return props.children;
    }
  };

  return (
    <BtnContainer {...props} disabled={props.disabled}>
      {checkId(props.id)}
    </BtnContainer>
  );
};

export default Button;

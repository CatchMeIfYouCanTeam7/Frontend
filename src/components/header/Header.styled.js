import styled from "styled-components";
import CMIYC_Logo from "../../image/CMIYC_Logo_Color.png";

export const StHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const CatchLogo = styled.div`
  position: absolute;
  background-image: url(${CMIYC_Logo});
  background-size: contain;
  background-repeat: no-repeat;
  top: 23px;
  left: 50px;
  width: 240px;
  height: 100px;
  &:hover {
    cursor: pointer;
  }
`;

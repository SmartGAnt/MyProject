import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  position: relative;
  text-align: center;
`;

export const PTitle = styled("p")`
  color: #07A0EE;
  font-weight: bold;
  margin-bottom:0 !important;
  position: absolute;
  font-size: 38px;
`;

export const PText = styled("p")`
  color: black;
  font-weight: bold;
  margin-bottom:0 !important;
  position: absolute;
  font-size: 18px;
`;

export const StyledImg = styled("img")`
  color: black;
  font-weight: bold;
  margin-bottom:0 !important;
  font-size: 18px;
  position: absolute;
  top:0;
  left:-10px;
  z-index: -1;
  width: 100%;
`;
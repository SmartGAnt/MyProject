import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 3rem 0 6rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 800px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardWrapper = styled("div")`
  max-width: 1000px;

  display: flex;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
    
  div:nth-child(1) p:nth-child(1) {
    left: 37px;
    top: 22px;
  }
  
  div:nth-child(1) p:nth-child(2) {
    left: 3px;
    top: 75px;
  }

  div:nth-child(2) p:nth-child(1) {
    left: 50px;
    top: 22px;
  }
  
  div:nth-child(2) p:nth-child(2) {
    left: 30px;
    top: 75px;
  }

  div:nth-child(3) p:nth-child(1) {
    left: 45px;
    top: 22px;
  }
  
  div:nth-child(3) p:nth-child(2) {
    left: 0px;
    top: 75px;
  }

  div:nth-child(4) p:nth-child(1) {
    left: 25px;
    top: 22px;
  }
  
  div:nth-child(4) p:nth-child(2) {
    left: 40px;
    top: 75px;
  }
`;




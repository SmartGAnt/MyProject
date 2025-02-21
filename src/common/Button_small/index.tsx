import { withTranslation } from "react-i18next";
import { Container, StyledP } from "./styles";
import { ButtonSmallProps } from "../types";
import { Col, Row } from "antd";

export const ButtonSmall = ({ src, text, onClick, t }: ButtonSmallProps) => (
  <Container onClick={onClick}>
    <Col lg={4}>
      <img src={`/img/svg/${src}`} width={40} />
    </Col>
    <Col lg={20}>
      <StyledP>{t(text)}</StyledP>
    </Col>
  </Container>
);

// export default withTranslation()(ButtonBig);

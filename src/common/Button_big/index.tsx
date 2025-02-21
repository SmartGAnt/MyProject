import { withTranslation } from "react-i18next";
import { Container, StyledP } from "./styles";
import { ButtonBigProps } from "../types";

export const ButtonBig = ({ src, text, onClick, t }: ButtonBigProps) => (
  <Container onClick={onClick}>
    <img src={`/img/svg/${src}`} width={70} style={{marginBottom: 20}}/>
    <StyledP>{t(text)}</StyledP>
  </Container>
);

// export default withTranslation()(ButtonBig);

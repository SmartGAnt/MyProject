import { withTranslation } from "react-i18next";
import { Container, PText, PTitle, StyledImg } from "./styles";
import { CardVectorProps } from "../types";
import { Col, Row } from "antd";

export const CardVector = ({ src, title, text, t }: CardVectorProps) => (
    <Container>
        <PTitle>
            {t(title)}
        </PTitle>
        <PText>
            {t(text)}
        </PText>
        <StyledImg src={`/img/svg/${src}`}/>
    </Container>
);

// style={{backgroundImage:`url('/img/svg/${src}')`}}
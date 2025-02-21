import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, CardWrapper } from "./styles";
import parse from "html-react-parser";
import { CardVector } from "../../common/Card_vector";

interface MiddleBlockProps {
  title: string;
  cardVector: (
    {
      src: string,
      title: string,
      text: string
    }
  )[];
  t: TFunction;
}

const MiddleBlock = ({ title, cardVector, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Col>
          <ContentWrapper>
            <h6>{parse(title)}</h6>
          </ContentWrapper>
          <CardWrapper>
            {typeof cardVector === "object" &&
              cardVector.map(
                (
                  item: {
                    src: string;
                    title: string;
                    text: string;
                  },
                  id: number
                ) => {
                  return (
                    <CardVector
                      key={id}
                      src={item.src}
                      title={item.title}
                      text={item.text}
                      t={t}
                    />
                  );
                }
              )}
          </CardWrapper>
        </Col>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
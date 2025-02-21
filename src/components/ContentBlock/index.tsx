import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { ButtonBig } from "../../common/Button_big";
import { ButtonSmall } from "../../common/Button_small";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  SmallButtonWrapper,
} from "./styles";


import parse from 'html-react-parser';

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  buttonBig,
  buttonSmall,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              {/* <h6>{t(title)}</h6> */}
              <h6>{parse(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <div>
                  <ButtonWrapper>
                    {typeof buttonBig === "object" &&
                      buttonBig.map(
                        (
                          item: {
                            src: string;
                            text: string;
                          },
                          id: number
                        ) => {
                          return (
                            <ButtonBig
                              key={id}
                              src={item.src}
                              text={item.text}
                              t={t}
                              onClick={() => scrollTo("about")}
                            />
                          );
                        }
                      )}
                  </ButtonWrapper>
                  <SmallButtonWrapper style={{ marginTop: 15 }}>
                    {typeof buttonSmall === "object" &&
                      buttonSmall.map(
                        (
                          item: {
                            src: string;
                            text: string;
                          },
                          id: number
                        ) => {
                          return (
                            <ButtonSmall
                              key={id}
                              src={item.src}
                              text={item.text}
                              t={t}
                              onClick={() => scrollTo("about")}
                            />
                          );
                        }
                      )}
                  </SmallButtonWrapper>
                  <SmallButtonWrapper style={{ marginTop: 15 }}>
                    {typeof buttonSmall === "object" &&
                      buttonSmall.map(
                        (
                          item: {
                            src: string;
                            text: string;
                          },
                          id: number
                        ) => {
                          return (
                            <ButtonSmall
                              key={id}
                              src={item.src}
                              text={item.text}
                              t={t}
                              onClick={() => scrollTo("about")}
                            />
                          );
                        }
                      )}
                  </SmallButtonWrapper>
                </div>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);

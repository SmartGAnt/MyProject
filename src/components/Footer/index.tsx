import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      // style={{color:'white'}}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Row>
          {/* <SvgIcon src="image-removebg-preview 1.png" width="267px" height="200px" /> */}
          <img src="/img/svg/image-removebg-preview 1.png" alt="Description" style={{ maxWidth: "100%", height: "auto", width: 267 }} />
        </Row>
        <Container>
          <Row justify="space-between">
            <Col lg={6} md={8} sm={12} xs={12}>
              <Title>{t("Features")}</Title>
              <Large to="/">{t("Home")}</Large>
              <Large to="/">{t("Rentars")}</Large>
              <Large to="/">{t("Blog")}</Large>
              <Large to="/">{t("Post")}</Large>
              <Large to="/">{t("Login")}</Large>
              <Large to="/">{t("Terms")}</Large>
              <Large to="/">{t("Claims")}</Large>
            </Col>
            <Col lg={6} md={8} sm={12} xs={12}>
              <Title>{t("Quick Links")}</Title>
              <Large to="/">{t("About us")}</Large>
              <Large to="/">{t("Terms")}</Large>
              <Large to="/">{t("Terms of services")}</Large>
              <Large to="/">{t("Privacy policy")}</Large>
            </Col>
            <Col lg={6} md={8} sm={12} xs={12}>
              <Title>{t("Help")}</Title>
              <Large to="/">{t("Contact us")}</Large>
              <Large to="/">{t("Become a partner")}</Large>
              <Large to="/">{t("Policy")}</Large>
            </Col>
            <Col lg={6} md={8} sm={12} xs={12}>
              <Title>{t("Help")}</Title>
              <Large to="/">{t("Contact us")}</Large>
              <Large to="/">{t("Become a partner")}</Large>
              <Large to="/">{t("Policy")}</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={false}>
          <Row
            justify="space-between"
            align="middle"
            style={{ padding: "3rem" }}
          >
            <FooterContainer>
              <Col lg={18} style={{ color: 'white' }}>© 2024 Insurance carrier. All Rights Reserved.<br />
                Terms of Service | Privacy Policy | Licenses | Cookie Preferences</Col>
              <Col lg={6}>
                <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="icons8-twitter-50 1.png"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="icons8-instagram-50 1.png"
                />
                <SocialLink
                  href="https://medium.com/@lashakakabadze/"
                  src="icons8-fb-50 1.png"
                />
              </Col>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

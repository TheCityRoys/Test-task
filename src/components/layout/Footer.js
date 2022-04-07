import React from "react";
import styled from "styled-components";
import { Container, Paragraph } from "..";
import { black, primary, border } from "../../styles/colors";
import { mobile, smMobile, tablet } from "../../styles/breakpoints";
import { icons } from "../../utils/icons";
import { useTranslation } from "react-i18next";
import { StoreButton } from "../buttons/StoresElements";

export const Footer = () => {
  const { t } = useTranslation("translations");
  return (
    <FooterWrapper>
      <Container>
        <FooterMain>
          <FooterLeft>
            <Logo src={icons.logo} />
            <Paragraph fontSize="0.875rem" margin="1.5rem 0 1rem"></Paragraph>
            <AppButtons>
              <StoreButton icon={icons.appstore_black} link={"https://apps.apple.com/us/app/easypanda/id1449245749"} />
              <StoreButton icon={icons.googleplay_black} link={"https://play.google.com/store/apps/details?id=com.partly"} />
            </AppButtons>
          </FooterLeft>
          <FooterRight>
            <FooterColumn>
              <Title>{t("footer.legal")}</Title>
              <List>
                <StyledLink to="/privacy-policy">
                  {t("footer.privacy_policy")}
                </StyledLink>

                <StyledLink to="/">{t("footer.terms_conditions")}</StyledLink>

                <StyledLink to="/">{t("footer.faq")}</StyledLink>
              </List>
            </FooterColumn>
            <FooterColumn>
              <Title>{t("footer.socials")}</Title>
              <List>
                <StyledLink to="/">{t("footer.instagram")}</StyledLink>

                <StyledLink to="/">{t("footer.facebook")}</StyledLink>

                <StyledLink to="/">{t("footer.linkedin")}</StyledLink>
              </List>
            </FooterColumn>
            <FooterColumn>
              <Title>{t("footer.get_in_touch")}</Title>
              <List>
                <StyledLink href="mailto: hello@easypanda.com">
                  hello@easypanda.com
                </StyledLink>
              </List>
            </FooterColumn>
          </FooterRight>
        </FooterMain>
        <FooterBottom>
          <Reserved>
            <Paragraph fontSize="1rem">{t("footer.copyright")}</Paragraph>
          </Reserved>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  padding: 4rem 0 0;

  @media ${mobile} {
    padding: 3rem 0 0;
  }
  @media ${tablet} {
    padding: 3rem;
  }
`;
const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${tablet} {
    align-items: center;
    justify-content: center;
  }
  @media ${mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 32px;
`;

const AppButtons = styled.div`
  display: flex;
  @media ${mobile} {
    display: none;
  }
`;
const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 18rem;
  @media ${tablet} {

  }
  @media ${mobile} {
    max-width: 100%;
    align-items: flex-start;
    text-align: center;
    border-bottom: 1px solid ${border};
    width: 100%;
  }
`;
const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem 0 0;
  @media ${tablet} {
    flex-wrap: wrap;
    justify-content: initial;
    padding: 3rem 0 2rem;
    border-bottom: 1px solid ${border};
  }
  @media ${mobile} {
    flex-wrap: wrap;
    justify-content: initial;
    padding: 3rem 0 2rem;
    border-bottom: 1px solid ${border};
  }
`;
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8.875rem;

  @media ${tablet} {
    padding-left: 4rem;
  }

  @media ${mobile} {
    padding: 0;
    &:first-child {
      width: 50%;
    }
    &:nth-child(2) {
      width: 50%;
      padding-left: 2.5rem;
    }
    &:last-child {
      padding-top: 2rem;
    }
  }
`;
const Title = styled.h6`
  font-family: "Nunito", sans-serif;
  display: flex;
  color: ${primary};
  font-size: 0.875rem;
  line-height: 1.36;
  margin: 0 0 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLink = styled.a`
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  line-height: 1;
  color: ${black};
  margin: 0 0 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: 0.2s all;
  &:hover {
    color: ${primary};
    transition: 0.2s all;
  }
  @media ${smMobile} {
    font-size: 0.7rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5.5rem 0 5.5rem;
  @media ${tablet} {
    text-align: center;
  }
  @media ${mobile} {
    padding: 2rem 0;
  }
`;
const Reserved = styled.div`
  display: flex;
  @media ${tablet} {
    text-align: center;
  }
`;
const StoreButtonIcon = styled.img`
  display: flex;
  margin-right: 1rem;
  opacity: 0.99;
  transform: translateZ(0);
  width: 150px;
  height: auto;
`;

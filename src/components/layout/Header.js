import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Button } from "..";
import { black, white } from "../../styles/colors";
import { mobile, tablet } from "../../styles/breakpoints";
import { icons } from "../../utils/icons";
import { useTranslation } from "react-i18next";
import { setLanguage, getLanguage } from "../../utils/language";

export const Header = () => {
  const { t, i18n } = useTranslation("translations");
  const locale = getLanguage();
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "lt", label: "Lietuvių" },
    { value: "lv", label: "Latviešu" },
  ];
  const SetLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Flex>
          <Link to="/">
            <Logo src={icons.logo} />
          </Link>
          <HeaderRightWrapper>
            <ButtonsWrapper>
              <Button
                onClick={() =>
                (window.location.href =
                  "https://partner.easypanda.com/onboarding")
                }
                label={t("actions.register_as_provider")}
                margin="0 1rem 0 0"
                position="absolute"
              />
            </ButtonsWrapper>
            <LanguageSelect
              name="language"
              id="language"
              onChange={(e) => SetLanguage(e.target.value)}
            >
              {languageOptions.map((lang) => {
                const selected = lang.value === locale ? true : false;
                return (
                  <LanguageOption
                    selected={selected}
                    key={lang.value}
                    value={lang.value}
                  >
                    {lang.label}
                  </LanguageOption>
                );
              })}
            </LanguageSelect>
          </HeaderRightWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  );
};
const LanguageSelect = styled.select`
  background-color: transparent;
  border: 1px solid #fff;
  color: ${black};
`;
const LanguageOption = styled.option`
  background: rgba(200, 200, 200, 0.3);
  border: 1px solid #fff;
`;
const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  @media ${mobile} {
    padding: 0rem 0;
    height: initial;
    box-shadow: none;
    
  }
  @media ${tablet} {
    padding: 0rem 0;
    height: initial;
    box-shadow: none;
  }
`;
const HeaderWrapper = styled.div`
  width: 100%;
  padding: 1.625rem 0;
  height: 80px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  overflow: hidden;
  @media ${mobile} {
    padding: 2.25rem 0;
    height: initial;
    box-shadow: none;
  }
  @media ${tablet} {
    padding: 2.25rem 1.5rem;
    box-shadow: none;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  @media ${mobile} {
    display: none;
  }
`;
const Logo = styled.img`
  height: 2.2rem;
`;

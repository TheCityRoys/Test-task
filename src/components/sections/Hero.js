import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mobile, tablet } from "../../styles/breakpoints";
import { icons } from "../../utils/icons";
import { Container, H1, Paragraph } from "../../components";
import { images } from "../../utils/images";
import i18next from "i18next";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { StoreButton } from "../buttons/StoresElements";

export const Hero = () => {
  let { t } = useTranslation("translations");
  const isMobile = useMediaQuery({ query: mobile });
  return (
    <Wrapper>
      <Container>
        <Flex>
          <TextWrapper>
            <H1>
              {t("hero.title")} <strong>{t("hero.title_span")}</strong>
            </H1>
            <Paragraph margin="1.5rem 0 0" maxWidth="30rem">
              {t("hero.description")}
            </Paragraph>
            <ButtonsWrapper>
              <StoreButton icon={icons.appstore_black} link={"https://apps.apple.com/us/app/easypanda/id1449245749"} />
              <StoreButton icon={icons.googleplay_black} link={"https://play.google.com/store/apps/details?id=com.partly"} />
            </ButtonsWrapper>
          </TextWrapper>
        </Flex>
      </Container>
      <ImageWrapper>
        <Image src={isMobile ? images.hero_mobile : images.hero} />
      </ImageWrapper>
    </Wrapper>
  );
};

Hero.propTypes = {
  label: PropTypes.string,
  imageSource: PropTypes.string,
  price: PropTypes.string,
};
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media ${tablet} {
    height: 57vh;
    align-items: center;
    padding 0 2rem;
  }
    @media ${mobile} {
    height: initial;
    flex-direction: column;
    height: 80vh;
    padding 0;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  position: reative;
  @media ${mobile} {
    width: 100%;
  }
`;
const Flex = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  margin: 1.5rem 0 0;
  @media ${mobile} {
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right 0%;
`;
const ImageWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  @media ${mobile} {
    margin: 3.375rem 0 0;
    position: relative;
    width: 100%;
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

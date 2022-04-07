import React from "react";
import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";
import { useMediaQuery } from "react-responsive";
import { icons } from "../../utils/icons";
import { images } from "../../utils/images";
import { Container, SectionText } from "../../components";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("translations");
  const isMobile = useMediaQuery({ query: mobile });
  return (
    <Wrapper>
      <Container padding={isMobile ? "0" : "initial"}>
        <TextWrapper>
          <SectionText
            subLabel={t("header_spans.about")}
            title={t("header_titles.about")}
            className="center"
            text={t("header_paragraphs.about")}
          />
          <DecoLeft src={icons.about_deco_left} />
          <DecoRight src={icons.about_deco_right} />
        </TextWrapper>
        <ImageWrapper>
          <Image src={isMobile ? images.about_mobile : images.about} />
        </ImageWrapper>
      </Container>
      <BackgroundDiffer>
        <Image
          src={isMobile ? icons.about_differ_mobile : icons.about_differ}
        />
      </BackgroundDiffer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 6.25rem 0 0;
  position: relative;
  @media ${mobile} {
    padding: 0;
  }
`;
const TextWrapper = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  position: relative;
  @media ${mobile} {
    padding: 0 1.5rem;
  }
`;
const DecoLeft = styled.img`
  position: absolute;
  top: 0;
  left: -12rem;
`;
const DecoRight = styled.img`
  position: absolute;
  top: 2rem;
  right: -8rem;
`;
const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 1rem auto -10rem;
  @media ${mobile} {
    margin: 3.75rem 0 -34rem;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const BackgroundDiffer = styled.div`
  position: absolute;
  width: 100%;
  bottom: calc(10rem + -5px);
  @media ${mobile} {
    bottom: calc(34rem + -5px);
  }
`;

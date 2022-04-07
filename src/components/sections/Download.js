import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../../styles/breakpoints";
import { primary } from "../../styles/colors";
import { icons } from "../../utils/icons";
import { Container, SectionText } from "../../components";
import { useMediaQuery } from "react-responsive";
import { images } from "../../utils/images";
import { useTranslation } from "react-i18next";
import { StoreButton } from "../buttons/StoresElements";

export const Download = () => {
  const { t } = useTranslation("translations");
  const isMobile = useMediaQuery({ query: mobile });
  return (
    <Wrapper>
      <Container>
        <Flex>
          <TextWrapper>
            <SectionText
              title={t("header_titles.download")}
              text={t("header_paragraphs.download")}
              className={isMobile ? "center" : "left"}
              margin="0"
              color="white"
              fontSize={isMobile ? "2.5rem" : "3.5rem"}
            />
            <ButtonsWrapper>
              <StoreButton icon={icons.appstore_black} link={"https://apps.apple.com/us/app/easypanda/id1449245749"} />
              <StoreButton icon={icons.googleplay_black} link={"https://play.google.com/store/apps/details?id=com.partly"} />
            </ButtonsWrapper>
          </TextWrapper>
          <ImageWrapper>
            <Image src={isMobile ? images.download_mobile : images.download} />
          </ImageWrapper>
        </Flex>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 2.5rem 0 3.75rem;
  position: relative;
  background: ${primary};

  @media ${mobile} {
    padding: 3rem 0 0rem;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  position: relative;
  @media ${mobile} {
    width: 100%;
  }
  @media ${tablet} {
    width: 100%;
    text-align: center;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${mobile} {
    flex-direction: column;
  }
  @media ${tablet} {
    flex-direction: column;
  }
`;
const ImageWrapper = styled.div`
  width: 50%;
  @media ${mobile} {
    width: 100%;
    overflow: hidden;
  }
`;

const Image = styled.img`
  width: 100%;

  @media ${mobile} {
    width: 100%;
    position: relative;
    top: 3px;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  margin: 2.5rem 0 0;

  @media ${mobile} {
    margin: 1.5rem 0 0;
    justify-content: center;
    width: 100%;
  }
  @media ${tablet} {
    justify-content: center;
    margin-bottom: 1rem;
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

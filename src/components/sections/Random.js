import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../../styles/breakpoints";
import { useMediaQuery } from "react-responsive";
import { Container, SectionTextBulletPoints } from "../../components";
import { images } from "../../utils/images";
import { useTranslation } from "react-i18next";

export const Random = () => {
  const { t } = useTranslation("translations");
  const isMobile = useMediaQuery({ query: mobile });
  return (
    <Wrapper>
      <InnerWrapper>
        <Container>
          <Flex>
            <TextWrapper>
              <SectionTextBulletPoints
                subLabel={t('header_spans.random')}
                title={t('header_titles.random')}
                className={isMobile ? "center" : "left"}
                margin="0"
                maxWidth={isMobile ? "100%" : "52%"}
                text={t('header_paragraphs.random')}
              />
              <ImageWrapper>
                <Image src={isMobile ? images.random_mobile : images.random} />
              </ImageWrapper>
            </TextWrapper>
          </Flex>
        </Container>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 14.375rem 2.5rem 0;
  position: relative;

  @media ${mobile} {
    padding: 2.5rem 0.875rem 0;
  }
`;
const InnerWrapper = styled.div`
  width: 100%;
  border-radius: 1rem;
  background: rgba(85, 187, 135, 0.2);
  @media ${tablet} {
    padding: 0 2rem;
  }
`;
const TextWrapper = styled.div`
  width: 100%;
  padding: 10.25rem 0;
  position: relative;
  @media ${mobile} {
    padding: 3rem 0 2rem;
    display: flex;
    flex-direction: column;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  width: 50%;
  position: absolute;
  z-index: 2;
  height: 110%;
  top: -20%;
  right: -5%;
  @media ${tablet} {
    top: 10vh;
  }
  @media ${mobile} {
    position: relative;
    top: initial;
    right: initial;
    height: initial;
    width: 100%;
    bottom: 40%;
  }
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  @media ${tablet} {
    height: 50vw;
  }
  @media ${mobile} {
    position: relative;
    top: initial;
    right: initial;
    height: initial;
    width: 100%;
  }
`;

import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../../styles/breakpoints";
import { useMediaQuery } from "react-responsive";
import { Container, SectionText } from "../../components";
import { images } from "../../utils/images";
import { useTranslation } from "react-i18next";

export const Geography = () => {
  const { t } = useTranslation("translations");
  const isMobile = useMediaQuery({ query: mobile });
  return (
    <Wrapper>
      <Container>
        <Flex>
          <ImageWrapper>
            <Image
              src={isMobile ? images.geography_mobile : images.geography}
            />
          </ImageWrapper>
          <TextWrapper>
            <SectionText
              title={t('header_titles.geography')}
              text={t('header_paragraphs.geography1') + '\n\n' + t('header_paragraphs.geography2')}
              subLabel={t('header_spans.geography')}
              className="left"
              margin="0"
              maxWidth="79rem"
            />
          </TextWrapper>
        </Flex>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 5.375rem 0 14.25rem;
  position: relative;
  @media ${mobile} {
    padding: 4rem 0 3rem;
  }
`;

const TextWrapper = styled.div`
  padding: 0 0 0 8.375rem;
  position: relative;
  @media ${tablet} {
    padding: 0 1rem;
  }
  @media ${mobile} {
    padding: 0;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media ${mobile} {
    flex-direction: column-reverse;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  z-index: 2;
  @media ${mobile} {
    margin: 1.75rem 0 0;
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
`;

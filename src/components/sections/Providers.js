import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../../styles/breakpoints";
import { orange } from "../../styles/colors";
import { useMediaQuery } from "react-responsive";
import { Container, SectionText, Button } from "../../components";
import { images } from "../../utils/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Providers = () => {
  const { t } = useTranslation("translations");
  const isMobile = useMediaQuery({ query: mobile });
  return (
    <Wrapper>
      <InnerWrapper>
        <Container>
          <Flex>
            <ImageWrapper>
              <Image
                src={isMobile ? images.providers_mobile : images.providers}
              />
            </ImageWrapper>
            <TextWrapper>
              <SectionText
                title={t('header_titles.providers')}
                className={isMobile ? "center" : "left"}
                margin="0"
                text={t('header_paragraphs.providers')}
              />
              <ButtonsWrapper>
                <StyledLinkStore to="/">
                  <Button
                    onClick={() => window.location.href = "https://partner.easypanda.com/onboarding"}
                    className="black big"
                    label={t('actions.register_as_provider')}
                  />
                </StyledLinkStore>
              </ButtonsWrapper>
            </TextWrapper>
          </Flex>
        </Container>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 2.5rem 12rem;
  position: relative;
  @media ${mobile} {
    padding: 0rem 0.875rem 10.5rem;
  }
  @media ${tablet} {
    padding: 0rem 0.875rem 4.5rem;
  }
`;
const InnerWrapper = styled.div`
  width: 100%;
  border-radius: 1rem;
  background: ${orange};
  @media ${tablet} {
    padding: 0 2rem;
  }
`;
const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-left: calc(45% + 4rem);
  @media ${mobile} {
    padding: 0;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 9.5rem 0 5rem;
  position: relative;
  @media ${tablet} {
    padding: 4rem 0 5rem;
  }
  @media ${mobile} {
    padding: 3rem 0 0;
    flex-direction: column-reverse;
  }

`;
const ImageWrapper = styled.div`
  width: 45%;
  z-index: 2;
  padding: 4rem 0 0;
  position: absolute;
  @media ${mobile} {
    width: 100%;
    position: relative;
    top: 6rem;
    margin: -4.5rem;
    padding: 0;
  }
`;

const Image = styled.img`
  width: 100%;
`;
const StyledLinkStore = styled(Link)`
  display: flex;
  text-decoration: none;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  margin: 2rem 0 0;
  @media ${mobile} {
    width: 100%;
    justify-content: center;
    margin: 1.5rem 0 0;
  }
`;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { lightBlue, lightGreen, primary, secondary } from "../../styles/colors";
import { H6, Paragraph } from "../../components";

export const BlogItem = ({ image, title, text, category }) => {
  return (
    <StyledLink to="/article">
      <Wrapper>
        <ImageWrapper>
          <Image src={image} />
          <Category className={category === "Articles" && "articles"}>
            {category}
          </Category>
        </ImageWrapper>
        <TextWrapper>
          <H6 fontSize="1.125rem" margin="1.5rem 0 1rem 0">
            {title}
          </H6>
          <Paragraph fontSize="1rem">{text}</Paragraph>
        </TextWrapper>
      </Wrapper>
    </StyledLink>
  );
};
BlogItem.propTypes = {
  label: PropTypes.string,
  imageSource: PropTypes.string,
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 1rem;
  flex: 1 0 50%;
  align-items: flex-start;
  flex-grow: 0;

  transition: 0.2s all;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 13.625rem;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Category = styled.div`
  font-family: "Nunito", sans-serif;
  font-weight: 900;
  font-size: 0.75rem;
  line-height: 1rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.375rem;
  border-radius: 0.375rem;
  background: ${lightBlue};
  color: ${primary};
  text-transform: uppercase;
  &.articles {
    background: ${lightGreen};
    color: ${secondary};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

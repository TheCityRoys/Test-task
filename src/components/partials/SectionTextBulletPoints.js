import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { H2, Paragraph, ParagraphPlain, UnorderedList } from "../../components";
import { mobile } from "../../styles/breakpoints";
import { primary, white } from "../../styles/colors";

export const SectionTextBulletPoints = ({
  subLabel,
  title,
  text,
  className,
  maxWidth,
  margin,
  fontSize,
  color,
}) => {
  let textList = text.split("*");
  let compText = [];
  for (let i = 0; i < textList.length; i++) {
    if (i === 0)
      compText.push(textList[i]);
    else {
      compText.push(<UnorderedList key={i}>{textList[i]}</UnorderedList>);
    }
  }
  return (
    <Wrapper className={className} maxWidth={maxWidth} margin={margin}>
      <SubLabel>{subLabel}</SubLabel>
      <Title>
        <H2 fontSize={fontSize} color={color}>
          {title}
        </H2>
      </Title>
      <ParagraphPlain fontSize="1.125rem" color={color}>
        {compText}
      </ParagraphPlain>
    </Wrapper>
  );
};

SectionTextBulletPoints.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};

SectionTextBulletPoints.defaultProps = {
  type: "button",
  disabled: false,
};
const SubLabel = styled.span`
  font-family: "Nunito", sans-serif;
  color: ${primary};
  letter-spacing: 0.05em;
  margin: 0 0 2.125rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 900;
  line-height: 1.36;
  @media ${mobile} {
    font-size: 0.75rem;
    margin: 0 0 1rem;
  }
`;
const Title = styled.div`
  display: flex;
  margin: 0 0 1rem;
  @media ${mobile} {
    margin: 0 0 1.5rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin || "0 auto"};
  max-width: ${(props) => props.maxWidth || "100%"};
  color: ${(props) => props.color || white};
  &.center {
    text-align: center;
    align-items: center;
  }
`;

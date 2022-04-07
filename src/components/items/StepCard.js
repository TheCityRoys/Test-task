import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";
import { white } from "../../styles/colors";
import { H6, Paragraph } from "../../components";

export const StepCard = ({ index, icon, title, text, onHover }) => {
  return (
    <Wrapper onMouseEnter={() => onHover(index)} onMouseLeave={() => onHover(0)} onPointerDown={() => onHover(index)}> 
      <Icon src={icon} />
      <H6 margin="1rem 0 0.5rem 0">{title}</H6>
      <Paragraph fontSize="1rem">{text}</Paragraph>
    </Wrapper>
  );
};
StepCard.propTypes = {
  label: PropTypes.string,
  imageSource: PropTypes.string,
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  flex: 1 0 50%;
  align-items: flex-start;
  flex-grow: 0;
  border: 1px solid transparent;
  transition: 0.2s all;

  &:hover {
    background: ${white};
    border: 1px solid rgba(66, 88, 207, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: 0.2s all;
  }

  @media ${mobile} {
    flex: initial;
    width: 100%;
    border: 1px solid rgba(66, 88, 207, 0.2);
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.08);
    margin: 0 0 0.5rem;
  }
`;

const Icon = styled.img`
  height: 3.75rem;
`;

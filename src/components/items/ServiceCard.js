import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { white } from "../../styles/colors";
import { H6 } from "../../components";

export const ServiceCard = ({ icon, title }) => {
  return (
    <Wrapper>
      <Icon src={icon} />
      <Title>
        <H6 fontSize="1.25rem">{title}</H6>
      </Title>
    </Wrapper>
  );
};
ServiceCard.propTypes = {
  label: PropTypes.string,
  imageSource: PropTypes.string,
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  transition: 0.2s all;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04),
    0px 8px 40px rgba(77, 77, 77, 0.1);
  text-align: center;
  background: ${white};

  &:hover {
    background: ${white};
  }
`;

const Title = styled.div`
display: flex;
align-items: center;
height: 50px;
margin: 1.625rem 0 0rem 0;
}
`;

const Icon = styled.img`
  height: 120px;
`;

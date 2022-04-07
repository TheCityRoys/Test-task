import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const StoreButton = ({
  icon,
  link,
}) => {
  return (
    <StyledLinkStore href={link}>
      <StoreIcon src={icon} />
    </StyledLinkStore>
  );
};

StoreButton.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
};

const StyledLinkStore = styled.a`
  display: flex;
`;

const StoreIcon = styled.img`
  display: flex;
  margin-right: 1rem;
  opacity: 0.99;
  transform: translateZ(0);
  width: 150px;
  height: auto;
`;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";
import { primary, black, white, grey, border } from "../../styles/colors";

export const DefaultButton = ({
  onClick,
  label,
  disabled,
  type,
  className,
  icon,
  children,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <Wrapper
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={className}
    >
      {icon ? <ButtonIcon src={icon} /> : null}

      {children}
    </Wrapper>
  );
};

DefaultButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

DefaultButton.defaultProps = {
  type: "button",
  disabled: false,
};

const Wrapper = styled.button`
  color: ${white};
  background: ${primary};
  font-weight: 700;
  border: none;
  font-size: 1rem;
  line-height: 24px;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background 0.2s;
  cursor: pointer;
  display: flex;
  width: max-content;
  position: ${(props) => props.position || "relative"};
  text-center: center;
  justify-content: center;

  &.small {
    padding: 11px 24px;
    font-size: 14px;
  }
  &.white {
    background: ${white};
    color: ${black};
  }
  &.backButton {
    background: ${grey};
    border-radius: 48px;
  }
  &.filterButton {
    background: none;
    font-size: 14px;
    line-height: 24px;
    padding: 4px 32px;
    border-radius: 100px;
    border: 1px solid ${border};
    margin-right: 1rem;
  }
  &.w100 {
    width: 100%;
  }
`;

const ButtonIcon = styled.img`
  height: 24px;
  margin-right: 8px;
`;

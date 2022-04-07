import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { primary, black, white, darkGrey, grey } from "../../styles/colors";

export const Button = ({
  onClick,
  label,
  disabled,
  type,
  className,
  icon,
  margin,
}) => {
  return (
    <Wrapper
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={className}
      margin={margin}
    >
      {icon ? (
        <>
          <Icon src={icon} />
        </>
      ) : null}
      {label}
    </Wrapper>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};
const Icon = styled.img`
  height: 24px;
  margin-right: 8px;
`;
const Wrapper = styled.button`
  font-family: "Nunito", sans-serif;
  color: ${white};
  background: ${primary};
  font-weight: 700;
  border: none;
  font-size: 1rem;
  line-height: 1;
  padding: 1rem 1.5rem;
  border-radius: 6rem;
  min-width: 8.75rem;
  text-align: center;
  justify-content: center;
  transition: background 0.2s;
  cursor: pointer;
  display: block;
  width: max-content;
  margin: ${(props) => props.margin || "0"};
  position: ${(props) => props.position || "relative"};
  display: flex;
  align-items: center;
  transition: 0.2s all;
  &.grey {
    background: ${grey};
    color: ${black};
  }
  &.black {
    background: ${black};
    color: ${white};
  }
  &.big {
    padding: 1.25rem 1.5rem;
  }
  &:hover {
    transition: 0.2s all;
    background: ${black};
    color: ${white};
    &.black {
      background: ${primary};
    }
    &.grey {
      background: ${darkGrey};
      color: ${black};
    }
  }
`;

import styled from "styled-components";
import { black, primary } from "../../styles/colors";
import { mobile } from "../../styles/breakpoints";

export const H1 = styled.h1`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  font-weight: ${(props) => props.fontWeight || 800};
  font-size: ${(props) => props.fontSize || "3.5rem"};
  line-height: ${(props) => props.lineHeight || "1.2"};
  color: ${(props) => props.color || black};
  strong {
    font-weight: 800;
    color: ${primary};
  }
  @media ${mobile} {
    font-size: ${(props) => props.fontSize || "2.5rem"};
  }
`;

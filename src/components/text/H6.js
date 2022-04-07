import styled from "styled-components";
import { black, primary } from "../../styles/colors";

export const H6 = styled.h6`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  font-weight: ${(props) => props.fontWeight || 800};
  max-width: ${(props) => props.maxWidth || "100%"};
  font-size: ${(props) => props.fontSize || "1.125rem"};
  line-height: ${(props) => props.lineHeight || "1.2"};
  display: flex;
  color: ${(props) => props.color || black};
  strong {
    font-weight: 800;
    color: ${primary};
  }
`;

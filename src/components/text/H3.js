import styled from "styled-components";
import { black, primary } from "../../styles/colors";

export const H3 = styled.h3`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  font-weight: ${(props) => props.fontWeight || 800};
  max-width: ${(props) => props.maxWidth || "100%"};
  font-size: ${(props) => props.fontSize || "2.5rem"};
  line-height: ${(props) => props.lineHeight || "1.2"};
  display: flex;
  color: ${(props) => props.color || black};
  white-space: pre-line;
  strong {
    font-weight: 800;
    color: ${primary};
  }
`;

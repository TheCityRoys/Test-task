import styled from "styled-components";
import { black } from "../../styles/colors";

export const Paragraph = styled.p`
  padding: ${(props) => props.padding || "0px"};
  font-family: 'Nunito', sans-serif;
  margin: ${(props) => props.margin || "0"};
  max-width: ${(props) => props.maxWidth || "100%"};
  font-weight: 400;
  font-size: ${(props) => props.fontSize || "1.25rem"};
  line-height: 1.6;
  display: flex;
  color: ${(props) => props.color || black};
  opacity: 0.6;
  white-space: pre-line;
`;

export const ParagraphPlain = styled.p`
  padding: ${(props) => props.padding || "0px"};
  font-family: 'Nunito', sans-serif;
  margin: ${(props) => props.margin || "0"};
  max-width: ${(props) => props.maxWidth || "100%"};
  font-weight: 400;
  font-size: ${(props) => props.fontSize || "1.25rem"};
  line-height: 1.6;
  color: ${(props) => props.color || black};
  opacity: 0.6;
  white-space: pre-line;
`;
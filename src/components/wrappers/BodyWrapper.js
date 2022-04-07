import styled from "styled-components";
import { black, white } from "../../styles/colors";

export const BodyWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${black};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background: ${white};
`;

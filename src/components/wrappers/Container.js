import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";

export const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: ${(props) => props.padding || "0"};
  overflow: ${(props) => props.overflow || "initial"};
  position: ${(props) => props.position || "initial"};
  @media ${mobile} {
    max-width: 100%;
    padding: ${(props) => props.padding || "0 1.5rem"};
  }
`;

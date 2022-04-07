import styled from "styled-components";
import { black } from "../../styles/colors";

export const H4 = styled.h4`
  padding: ${(props) => props.padding || "0px"};
  margin: 0px 0 0px 0;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1.42;
  display: flex;
  color: ${black};
  }
`;

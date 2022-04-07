import styled from "styled-components";
import { black } from "../../styles/colors";

export const H5 = styled.h5`
  padding: ${(props) => props.padding || "0px"};
  margin: 0px 0 0px 0;
  font-weight: 700;
  font-size:  24px;
  line-height: 32px;
  display: flex;
  color: ${black};
  }
`;

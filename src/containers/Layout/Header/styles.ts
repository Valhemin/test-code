import styled from "styled-components";
import css, { rem } from "../../../styles/variables";

export const HeaderContainerWrapStyled = styled.header`
  height: ${rem(100)};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
  z-index: 99;
  @media (max-width: ${css.breakpoints.mobile}) {
    box-shadow: unset;
  }
`;

export const HeaderContainerBodyStyled = styled.div`
  padding: 0 24px;

  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${css.breakpoints.mobile}) {
    padding: 0 20px;
  }
`;

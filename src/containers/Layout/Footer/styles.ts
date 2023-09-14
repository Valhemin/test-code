import styled from "styled-components";
import css from "../../../styles/variables";

export const FooterContainerWrapStyled = styled.footer`
  border-top: 1px solid #ccc;
`;

export const FooterBodyStyled = styled.div`
  padding: 28px 0;

  width: 80%;
  text-align: center;

  @media (max-width: ${css.breakpoints.tablet}) {
    padding: 16px 0;

    /* width: 86%; */
  }
`;

export const FooterTextStyled = styled.div`
  color: #b1b1b1;
`;

export const FooterCopyrightStyled = styled.div`
  margin-top: 24px;

  color: #7e7e7e;
  font-weight: 600;
  @media (max-width: ${css.breakpoints.mobile}) {
    margin-top: 16px;
  }
`;

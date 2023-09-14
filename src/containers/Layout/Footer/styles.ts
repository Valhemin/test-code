import styled from "styled-components";
import css, { rem } from "../../../styles/variables";

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
  padding: 0 10px;
  font-size: ${rem(13)};
  font-weight: 500;
  color: #a3a3a3;
`;

export const FooterCopyrightStyled = styled.div`
  margin-top: 24px;

  color: #7e7e7e;
  font-size: ${rem(15)};
  font-weight: 600;
  @media (max-width: ${css.breakpoints.mobile}) {
    margin-top: 16px;
  }
`;

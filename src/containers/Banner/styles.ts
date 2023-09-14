import styled from "styled-components";
import css, { rem } from "../../styles/variables";

export const BannerContainerWrapStyled = styled.div`
  height: 100%;

  background-color: #29b363;
  color: #ffffff;
`;

export const BannerBodyStyled = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const BannerContentPrimaryStyled = styled.div`
  margin-bottom: 16px;

  font-size: ${rem(28)};
  font-weight: 600;
  @media (max-width: ${css.breakpoints.mobile}) {
    font-size: ${rem(24)};
  }
`;

export const BannerContentSecondaryStyled = styled.div`
  margin-bottom: 16px;

  font-size: ${rem(12)};
  font-weight: 600;
  @media (max-width: ${css.breakpoints.mobile}) {
    padding-right: 20px;
    font-size: ${rem(15.5)};
  }
`;

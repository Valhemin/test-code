import styled from "styled-components";
import css, { rem } from "../../../../styles/variables";

export const HeaderProfileWrapStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderProfileContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  font-size: ${rem(16)};
`;

export const HeaderProfileTextPrimaryStyled = styled.span`
  font-size: ${rem(15)};
  color: #a3a3a3;
`;

export const HeaderProfileTextSecondaryStyled = styled.span`
  font-size: ${rem(14)};
  font-weight: 500;
  color: #4e4e4e;
`;

export const HeaderProfileLogoStyled = styled.div`
  margin-left: 4px;

  width: ${rem(70)};
  height: ${rem(70)};
  border-radius: 100%;
  overflow: hidden;
`;

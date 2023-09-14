import styled from "styled-components";
import { rem } from "../../styles/variables";

export const LogoWrapStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImageStyled = styled.img<{ width: number; height: number }>`
  width: ${(props) => rem(props.width)};
  height: ${(props) => rem(props.height)};
`;

import styled from "styled-components";

export const LogoWrapStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImageStyled = styled.img<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

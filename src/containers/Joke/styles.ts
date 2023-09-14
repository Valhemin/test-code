import styled from "styled-components";
import css, { rem } from "../../styles/variables";

export const JokeContainerWrapStyled = styled.section``;

export const JokeBodyStyled = styled.div`
  padding: 50px 80px 40px;

  @media (max-width: ${css.breakpoints.mobile}) {
    padding: 64px 30px 40px;
  }
`;

export const JokeContentStyled = styled.div`
  margin-bottom: 50px;

  font-size: ${rem(18)};
  color: #676767;
`;

export const JokeContentFinal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${rem(18)};
  font-weight: 600;
  color: #676767;
`;

export const JokeButtonReset = styled.div`
  margin: 100px 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    width: 80px;
    height: 30px;

    background-color: #ccc;

    border-radius: 4px;
  }
`;

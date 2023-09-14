import styled from "styled-components";
import css, { rem } from "../../../styles/variables";

export const JokeActionWrapStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const JokeActionStyled = styled.div`
  padding: 40px 40px;

  width: 70%;

  display: flex;
  justify-content: center;
  gap: 24px;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: ${css.breakpoints.mobile}) {
    width: 80%;
    gap: 36px;

    border: unset;
  }
`;

export const JokeButtonLikeStyled = styled.button`
  width: 220px;
  height: 40px;

  color: #fff;
  background-color: #2c7edb;

  font-size: ${rem(15)};

  box-shadow: 0 2px 2px #1c69c0;

  @media (max-width: ${css.breakpoints.mobile}) {
    width: 180px;
  }
`;

export const JokeButtonDislikeStyled = styled.button`
  width: 220px;
  height: 40px;

  color: #fff;
  background-color: #29b363;

  font-size: ${rem(15)};

  box-shadow: 0 2px 2px #19984e;

  @media (max-width: ${css.breakpoints.mobile}) {
    width: 180px;
  }
`;

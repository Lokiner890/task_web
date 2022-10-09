import styled from 'styled-components';

type TProps = {
  size: number;
};

export const Wrapper = styled.div<TProps>`
  animation-name: load;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes load {
    0% {
      transform: scale(1) rotate(0);
    }
    50% {
      transform: scale(1.1) rotate(180deg);
    }

    100% {
      transform: scale(1) rotate(360deg);
    }
  }
`;

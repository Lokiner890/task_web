import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  width: 100vw;

  background-image: ${({theme}) => theme.background.default};
`;

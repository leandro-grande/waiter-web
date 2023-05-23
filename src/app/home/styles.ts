import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${({theme}) => theme.COLORS.BACKGROUND};
`;
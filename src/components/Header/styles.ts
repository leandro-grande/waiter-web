import styled from "styled-components";


export const Container = styled.header`
  width: 100%;
  height: 198px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
`;

export const Contain = styled.div`
  height: 100%;
  max-width: 1216px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  p {
    font-size: 1rem;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;
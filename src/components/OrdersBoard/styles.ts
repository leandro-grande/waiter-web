import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  
  border: 1px solid ${({theme}) => theme.COLORS.BORDER};
  border-radius: 16px;

  header {
    margin: 24px 0px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      font-size: 14px;
    }

    strong {
      font-weight: 500;
      font-size: 14px;
    }
  }

  .board {
    height: 80px;
    margin: 8px 16px;
    cursor: pointer;

    background: ${({theme}) => theme.COLORS.WHITE};
    border: 1px solid ${({theme}) => theme.COLORS.BORDER};
    border-radius: 18px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    &:last-child {
      margin-bottom: 16px;
    }

    strong {
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.TEXT};
    }

    span {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.SUBTITLE};
    }
  }
`;
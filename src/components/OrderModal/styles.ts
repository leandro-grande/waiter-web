import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  width: 480px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  border-radius: 8px;
  outline: none;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 24px;
      color: ${({theme}) => theme.COLORS.TEXT};
    }
  }

  .status {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.COLORS.TEXT};

    span {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.TEXT};
    }

    strong {
      color: ${({theme}) => theme.COLORS.TEXT};
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

`;

export const CloseButton = styled(Dialog.Close)`
  border: 0;
  line-height: 0;
  font-size: 16px;
  cursor: pointer;
`;

export const OrdersDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.TEXT};
    opacity: 0.8;
  }

  .orders-item {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .qtd {
        display: block;
        min-width: 20px;
        margin-left: 12px;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.TEXT};

      }

      .details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
          color: ${({theme}) => theme.COLORS.TEXT};
        }

        span {
          display: block;
          font-size: 14px;
          color: ${({theme}) => theme.COLORS.TEXT};
        }
      }
    }
  }  

  .total {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 14px;
      }
    }
`;

export const Actions = styled.footer`
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  

  .primary {
    width: 100%;
    height: 44px;
    background-color: ${({theme}) => theme.COLORS.TEXT};
    border-radius: 48px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      filter: brightness(0.8);
    }

    strong {
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

  .secondary {
    margin-top: 24px;
    width: 100%;
    border: 0;
    background: transparent;
    color: ${({theme}) => theme.COLORS.PRIMARY};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;
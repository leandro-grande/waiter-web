import * as Dialog from '@radix-ui/react-dialog';
import { Order } from '@/@types/Order';

import { Actions, CloseButton, Content, OrdersDetails, Overlay } from './styles';
import Image from 'next/image';
import { FormatCurrency } from '@/utils/formatCurrency';

interface OrderModal {
  order: Order | null;
  isLoading: boolean;
  onChangeOrderStatus: () => Promise<void>;
  onCancelOrder: () => Promise<void>;
}

export function OrderModal({ order, isLoading, onChangeOrderStatus, onCancelOrder }: OrderModal) {

  console.log(order);

  if (!order) {
    return null;
  }

  const total = order.orderItems.reduce((acc, { product, qtd }) => {
    acc += qtd * product.price

    return acc;
  }, 0)

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <header>
          <h2>Mesa {order?.table}</h2>
          <CloseButton>X</CloseButton>
        </header>

        <div className="status">
          <span>Status do Pedido</span>

          <div>
            <span>
            {order.status === 'WAITING' && '🕑'}
            {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
            {order.status === 'DONE' && '✅'}
            </span>

            <strong>
            {order.status === 'WAITING' && 'Fila de espera'}
            {order.status === 'IN_PRODUCTION' && 'Em preparação'}
            {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
   
        </div>

        <OrdersDetails>
          <strong>Itens</strong>

          <div className="orders-item">
            {order.orderItems.map(({ id, product, qtd }) => (
              <div key={id} className="item">
                <Image src={`http://localhost:3333/image/${product.imagePath}`} height={40} width={48} alt='Imagem do produto' />
                <span className='qtd'>{qtd}x</span>
                <div className="details">
                  <strong>{product.name}</strong>
                  <span>{FormatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{FormatCurrency(total)}</strong>
          </div>

          <Actions>
            {order.status !== 'DONE' && (
               <button 
               type='button' 
               className='primary'
               disabled={isLoading}
               onClick={onChangeOrderStatus}
             >
               <span>{order.status === 'WAITING' ? '👩‍🍳' : '✅'} </span>
               <strong>{order.status === 'WAITING' ? 'Iniciar Produção' : 'Concluir Pedido'}</strong>
             </button>
            )}

            <button 
              type='button' 
              className='secondary'
              disabled={isLoading}
              onClick={onCancelOrder}
            >
              Cancelar Pedido
            </button>
          </Actions>
        </OrdersDetails>
      </Content>
    </Dialog.Portal>
  )
}
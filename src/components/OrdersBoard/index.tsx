import { Order } from "@/@types/Order";
import { Container } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { OrderModal } from "../OrderModal";
import { useState } from "react";
import { api } from "@/services/api";
import { ToastContainer, toast } from "react-toastify";


interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onOrderStatusChange: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onOrderStatusChange }: OrdersBoardProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  async function handleCancelOrder() {
    try {
      setIsLoading(true);
      await api.delete(`/orders/${selectedOrder?.id}`);

      setIsLoading(false);
      setOpenModal(false);
      onCancelOrder(selectedOrder!.id);
      toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`)
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  async function handleChangeOrderStatus() {
    const status =  selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    try {
      setIsLoading(true);
      await api.patch(`orders/${selectedOrder?.id}`, {
        status
      });
      setIsLoading(false);
      onOrderStatusChange(selectedOrder!.id, status);
      setOpenModal(false);
      toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
        <OrderModal 
          order={selectedOrder}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleChangeOrderStatus}
          isLoading={isLoading} 
        />

        {orders.map(order => (
          <Dialog.Trigger 
            key={order.id} 
            asChild   
          >
            <button 
              className="board" 
              onClick={() => setSelectedOrder(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.orderItems.length} itens</span>
            </button>
           </Dialog.Trigger>
        ))}
      </Dialog.Root>
      
    </Container>
  )
}
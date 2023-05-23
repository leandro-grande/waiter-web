import { useEffect, useState } from "react";
import sockeIo from 'socket.io-client';

import { Order } from "@/@types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { api } from "@/services/api";

import { Container } from "./styles";


export function Orders() {
   const [orders, setOrders] = useState<Order[]>([]);

   const waiting = orders.filter(order => order.status === 'WAITING');
   const inProduction = orders.filter(order => order.status === 'IN_PRODUCTION');
   const done = orders.filter(order => order.status === 'DONE');

   function handleCancelOrder(orderId: string) {
      setOrders(prevState => prevState.filter(order => order.id !== orderId))
   }

   function handleOrderStatusChange(orderId: string, status: Order['status']) {
      setOrders((prevState) => prevState.map(order => (
         order.id === orderId
         ? { ...order, status }
         : order
      )));
   }


   useEffect(() => {
      const socket = sockeIo('http://localhost:3333', {
         transports: ['websocket']
      });

      socket.on('order@new', (order: Order) => {
         setOrders(prevState => [...prevState, order]);
      })
   }, []);

   useEffect(() => {
      async function fetchOrders() {
         const response = await api.get('/orders');
         
         console.log(response.data)
         setOrders(response.data.orders)
      }

      fetchOrders();
   }, [])

  return (
    <Container>
       <OrdersBoard 
          icon="🕑"
          title="Fila de espera"
          orders={waiting}
          onCancelOrder={handleCancelOrder}
          onOrderStatusChange={handleOrderStatusChange}
       /> 
       <OrdersBoard 
          icon="👩‍🍳"
          title="Em produção"
          orders={inProduction}
          onCancelOrder={handleCancelOrder}
          onOrderStatusChange={handleOrderStatusChange}
       /> 
       <OrdersBoard 
          icon="✅"
          title="Pronto"
          orders={done}
          onCancelOrder={handleCancelOrder}
          onOrderStatusChange={handleOrderStatusChange}
       /> 
    </Container>
  )
}
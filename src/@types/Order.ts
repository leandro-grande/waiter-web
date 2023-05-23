

export interface Order {
  id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  orderItems: {
    id: string;
    qtd: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }[]
}
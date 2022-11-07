import { MyOrder, Order } from '../../types/order';
import { api } from './api';

// export async function createOrder(newOrder: Order) {
//   const abc = await api.post('/createOrder', newOrder);
// }

export async function getMyOrders(account: string) {
  const { data } = await api.get<MyOrder[]>(`/getOrders?user=${account}`);
  return data;
}

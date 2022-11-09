import { MyOrder } from '../../types/order';
import { api } from './api';

export async function getMyOrders(account: string) {
  const { data } = await api.get<MyOrder[]>(`/getOrders?user=${account}`);
  return data;
}

export async function matchedOrderIds() {
  const { data } = await api.get<string[]>('/getMatchingOrders');
  return data || [];
}

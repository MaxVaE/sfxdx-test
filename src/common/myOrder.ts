import { OrderStatus } from '../types/order';

export function getOrderStatus(maxAmount: number, amountLeftToFill: number): OrderStatus {
  if (maxAmount === amountLeftToFill) {
    return 'not filled';
  }

  if (amountLeftToFill === 0) {
    return 'filled';
  }

  return 'partially filled';
}

export function checkStatusFilled(status: OrderStatus) {
  return status === 'filled';
}

export function roundETH(amount: string | number) {
  return (Number(amount) * 10e-18).toFixed(0);
}

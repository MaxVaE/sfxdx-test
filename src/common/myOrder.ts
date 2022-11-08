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
  const value = Number(amount) / 10e18;

  if (value >= 1000) {
    return value.toFixed(0);
  }
  if (value >= 100) {
    return value.toFixed(1);
  }
  if (value >= 10) {
    return value.toFixed(2);
  }
  if (value >= 1) {
    return value.toFixed(3);
  }

  return value.toFixed(4);
}

export type OrderType = 'limit' | 'market';
export type OrderSide = 'buy' | 'sell';
export type OrderStatus = 'filled' | 'partially filled' | 'not filled';

export type Order = {
  tokenA: string;
  tokenB: string;
  orderType: OrderType;
  orderSide: OrderSide;
  amountA: number;
  amountB?: number;
};

export type MyOrder = {
  id: string;
  orderType: OrderType;
  orderSide: OrderSide;
  amountLeftToFill: string;
  amountA: string;
  amountB?: string;
};

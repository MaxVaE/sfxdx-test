export type OrderType = 'limit' | 'market';
export type OrderSide = 'buy' | 'sell';
export type OrderStatus = 'filled' | 'partially filled' | 'not filled';

export type Order = {
  tokenA: string;
  tokenB: string;
  orderType: OrderType;
  orderSide: OrderSide;
  amount: number;
  price?: number;
};

export type MyOrder = {
  id: number;
  orderType: OrderType;
  orderSide: OrderSide;
  orderStatus: OrderStatus;
  countFilled: number;
  amount: number;
  price?: number;
};

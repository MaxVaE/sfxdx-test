import clsx from 'clsx';
import { useMemo, useState } from 'react';

import { Order } from '../../types/order';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';

const INIT_ORDER: Order = {
  tokenA: '',
  tokenB: '',
  orderType: 'limit',
  orderSide: 'buy',
  amount: 0,
  price: 0,
};

function PlaceOrder() {
  const [isLimit, setIsLimit] = useState(true);
  const [isBuy, setIsBuy] = useState(true);
  const [newOrder, setNewOrder] = useState<Order>(INIT_ORDER);

  const disabled = useMemo(() => {
    const checkedFields = Object.entries(newOrder).filter(([key, value]) => {
      if (key === 'price') {
        if (!isLimit) {
          return false;
        }
      }

      return !value;
    });

    return !!checkedFields.length;
  }, [newOrder, isLimit]);

  return (
    <div className="place-order">
      <div className="place-order__header">
        <h2>Place the Order</h2>

        <button
          onClick={() => {
            setIsLimit(true);
            setNewOrder({ ...newOrder, orderType: 'limit' });
          }}
          type="button"
          className={clsx('place-order__limit place-order__order-type', { 'place-order__order-type--active': isLimit })}
        >
          Limit
        </button>

        <button
          onClick={() => {
            setIsLimit(false);
            setNewOrder({ ...newOrder, orderType: 'market', price: 0 });
          }}
          type="button"
          className={clsx('place-order__order-type', { 'place-order__order-type--active': !isLimit })}
        >
          Market
        </button>
      </div>

      <Switch
        checked={isBuy}
        onChangeChecked={() => {
          setIsBuy(!isBuy);
          setNewOrder({ ...newOrder, orderSide: !isBuy ? 'buy' : 'sell' });
        }}
      />

      <div className="place-order__fields">
        <Input id="token-a" onChange={(e) => setNewOrder({ ...newOrder, tokenA: e.target.value })} placeholder="Token A smart contract address" />
        <Input id="amount" onChange={(e) => setNewOrder({ ...newOrder, amount: Number(e.target.value) })} placeholder="Token A amount" type="number" />
        <Input id="token-b" onChange={(e) => setNewOrder({ ...newOrder, tokenB: e.target.value })} placeholder="Token B smart contract address" />
        {
          isLimit && (
            <Input
              id="price"
              onChange={(e) => setNewOrder({ ...newOrder, price: Number(e.target.value) })}
              placeholder="Limit price (in Token B)"
              type="number"
            />
          )
        }
        <span className={clsx('place-order__field-expected-price', { 'place-order__field-expected-price--placeholder': !newOrder.price })}>
          {newOrder.price ? `${newOrder.price * newOrder.amount} Token B` : 'Expected order price'}
        </span>
      </div>

      <Button disabled={disabled} className="place-order__button">Place the order</Button>
    </div>
  );
}

export default PlaceOrder;

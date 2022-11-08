import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { createOrder } from '../../common/createOrder';
import { RootState } from '../../store/store';
import { Order } from '../../types/order';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';

const INIT_ORDER: Order = {
  tokenA: '',
  tokenB: '',
  orderType: 'limit',
  orderSide: 'buy',
  amountA: 0,
  amountB: 0,
};

function PlaceOrder() {
  const [isLimit, setIsLimit] = useState(true);
  const [isBuy, setIsBuy] = useState(true);
  const [newOrder, setNewOrder] = useState<Order>(INIT_ORDER);

  const account = useSelector((state: RootState) => state.account.value);

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
            setNewOrder({ ...newOrder, orderType: 'market', amountB: 0 });
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
        <Input id="amount" onChange={(e) => setNewOrder({ ...newOrder, amountA: Number(e.target.value) })} placeholder="Token A amount" type="number" />
        <Input id="token-b" onChange={(e) => setNewOrder({ ...newOrder, tokenB: e.target.value })} placeholder="Token B smart contract address" />
        {
          isLimit && (
            <Input
              id="price"
              onChange={(e) => setNewOrder({ ...newOrder, amountB: Number(e.target.value) })}
              placeholder="Limit price (in Token B)"
              type="number"
            />
          )
        }
        <span className={clsx('place-order__field-expected-price', { 'place-order__field-expected-price--placeholder': !newOrder.amountB })}>
          {newOrder.amountB ? `${newOrder.amountB * newOrder.amountA} Token B` : 'Expected order price'}
        </span>
      </div>

      <Button
        onClick={() => createOrder(newOrder, account)}
        disabled={disabled}
        className="place-order__button"
      >
        Place the order
      </Button>
    </div>
  );
}

export default PlaceOrder;

import { clsx } from 'clsx';

import { MyOrder, OrderStatus } from '../../types/order';

type TabletProps = {
  myOrders: MyOrder[];
};

function Tablet({
  myOrders,
}: TabletProps) {
  return (
    <div className="tablet">
      <div className="tablet__header">
        <span>type</span>
        <span>side</span>
        <span>amount</span>
        <span>price</span>
        <span>filled</span>
        <span>status</span>
        <span>cancel</span>
      </div>

      {myOrders.map(({
        id,
        orderType,
        orderSide,
        orderStatus,
        countFilled,
        amount,
        price,
      }) => {
        const checkedStatusFelled = checkStatusFilled(orderStatus);

        return (
          <div key={id} className="tablet__row">
            <span>{orderType}</span>
            <span>{orderSide}</span>
            <span>{amount}</span>
            <span>{price}</span>
            <span>{countFilled}</span>

            <div className={`tablet__status tablet__status--${orderStatus}`}>{orderStatus}</div>

            <button
              disabled={checkedStatusFelled}
              className={clsx('tablet__button', { 'tablet__button--cancel': !checkedStatusFelled })}
              type="button"
            >
              {checkedStatusFelled ? 'N/A' : 'Cancel'}
            </button>
          </div>
        );
      })}
    </div>
  );

  function checkStatusFilled(status: OrderStatus) {
    return status === 'filled';
  }
}

export default Tablet;

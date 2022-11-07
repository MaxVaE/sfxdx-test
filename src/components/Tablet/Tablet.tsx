import { clsx } from 'clsx';

import { checkStatusFilled, getOrderStatus, roundETH } from '../../common/myOrder';
import { MyOrder } from '../../types/order';

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
        amountLeftToFill,
        amountA,
        amountB = 0,
      }) => {
        const maxAmount = Math.max(Number(amountA), Number(amountB));
        const orderStatus = getOrderStatus(maxAmount, Number(amountLeftToFill));
        const checkedStatusFelled = checkStatusFilled(orderStatus);

        return (
          <div key={id} className="tablet__row">
            <span>{orderType}</span>
            <span>{orderSide}</span>
            <span>{roundETH(amountA)}</span>
            <span>{roundETH(amountB)}</span>
            <span>{roundETH(amountLeftToFill)}</span>

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
}

export default Tablet;

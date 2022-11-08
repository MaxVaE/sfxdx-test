import { clsx } from 'clsx';
import { useSelector } from 'react-redux';

import { checkStatusFilled, getOrderStatus, roundETH } from '../../common/myOrder';
import { cancelOrder } from '../../common/cancelOrder';
import { RootState } from '../../store/store';
import { MyOrder } from '../../types/order';

type TabletProps = {
  myOrders: MyOrder[];
};

function Tablet({
  myOrders,
}: TabletProps) {
  const account = useSelector((state: RootState) => state.account.value);

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

      {myOrders && myOrders.map(({
        id,
        orderType,
        orderSide,
        amountLeftToFill,
        amountA,
        amountB = 0,
        isCanceled,
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
              onClick={() => cancelOrder(id, account)}
              disabled={checkedStatusFelled}
              className={clsx('tablet__button', { 'tablet__button--cancel': !checkedStatusFelled })}
              type="button"
            >
              {checkedStatusFelled || isCanceled ? 'N/A' : 'Cancel'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Tablet;

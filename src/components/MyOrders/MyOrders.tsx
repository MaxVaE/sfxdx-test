import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getMyOrders } from '../../common/api/queries';
import { RootState } from '../../store/store';
import { MyOrder } from '../../types/order';
import Tablet from '../Tablet/Tablet';

function MyOrders() {
  const account = useSelector((state: RootState) => state.account.value);
  const [myOrders, setmyOrders] = useState<MyOrder[]>([]);

  useEffect(() => {
    async function loadMyOrders() {
      if (account) {
        const orders = await getMyOrders(account);
        setmyOrders(orders);
      }
    }

    loadMyOrders();
  }, [account]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      {
        account
          ? <Tablet myOrders={myOrders} />
          : <div className="my-orders__no-connect">Connect your wallet to start trading</div>
      }
    </div>
  );
}

export default MyOrders;

import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import Tablet from '../Tablet/Tablet';

function MyOrders() {
  const account = useSelector((state: RootState) => state.account.value);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      {
        account
          ? <Tablet myOrders={[]} />
          : <div className="my-orders__no-connect">Connect your wallet to start trading</div>
      }
    </div>
  );
}

export default MyOrders;

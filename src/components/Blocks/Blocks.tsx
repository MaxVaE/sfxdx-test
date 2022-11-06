import MyOrders from '../MyOrders/MyOrders';
import OrderBook from '../OrderBook/OrderBook';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

function Blocks() {
  return (
    <div className="blocks">
      <PlaceOrder />
      <MyOrders />
      <OrderBook />
    </div>
  );
}

export default Blocks;

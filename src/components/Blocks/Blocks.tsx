import MyOrders from '../MyOrders/MyOrders';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

function Blocks() {
  return (
    <div className="blocks">
      <PlaceOrder />
      <MyOrders />
      <div className="block-c">block-c</div>
    </div>
  );
}

export default Blocks;

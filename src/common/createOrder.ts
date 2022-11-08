import Web3 from 'web3';

import abi from './abi';
import { Order } from '../types/order';
import { ADDRESS } from './const';

export async function createOrder(newOrder: Order, address: string) {
  if (!window.ethereum) {
    return null;
  }

  const {
    tokenA, tokenB, amountA, amountB = 0, orderType,
  } = newOrder;

  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(abi, ADDRESS);

  let transaction;
  const valueA = BigInt(amountA * 10e18);
  const valueB = BigInt(amountB * 10e18);

  if (orderType === 'market') {
    // ToDo: add get matchedOrderIds
    transaction = contract.methods.matchOrders(
      // uint256[] calldata matchedOrderIds,
      tokenA,
      tokenB,
      valueA,
      valueB,
      true,
    );
  } else {
    transaction = contract.methods.createOrder(
      tokenA,
      tokenB,
      valueA,
      valueB,
    );
  }

  try {
    const data = await transaction.send({ from: address });
    return data;
  } catch (e) {
    return null;
  }
}

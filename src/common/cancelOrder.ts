import Web3 from 'web3';

import abi from './abi';
import { ADDRESS } from './const';

export async function cancelOrder(orderId: string, address: string) {
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(abi, ADDRESS);

  const transaction = contract.methods.cancelOrder(orderId);

  try {
    const data = await transaction.send({ from: address });
    return data;
  } catch (e) {
    return null;
  }
}

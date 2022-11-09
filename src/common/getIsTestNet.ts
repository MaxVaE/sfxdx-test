import Web3 from 'web3';

const TEST_NETS = ['goerli', 'ropsten', 'kovan', 'rinkeby'];

export async function getIsTestNet() {
  const web3 = new Web3(Web3.givenProvider);

  const networkType = await web3.eth.net.getNetworkType();
  const isTestNet = TEST_NETS.includes(networkType);

  return isTestNet;
}

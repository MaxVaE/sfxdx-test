import Web3 from 'web3';

export async function getIsTestNet() {
  const web3 = new Web3(Web3.givenProvider);

  // ToDo: add more test nets
  const isTestNet = await web3.eth.net.getNetworkType() === 'goerli';

  return isTestNet;
}

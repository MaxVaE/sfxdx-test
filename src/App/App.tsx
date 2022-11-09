import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Web3 from 'web3';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Blocks from '../components/Blocks/Blocks';
import Message from '../components/Message/Message';
import { getIsTestNet } from '../common/getIsTestNet';
import { changeAccount } from '../store/reducers/accountSlice';

function App() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function mountApp() {
      if (window.ethereum) {
        const address = window.ethereum.selectedAddress;

        if (address) {
          await loadAccount();
        }
      }
    }

    mountApp();
  }, []);

  return (
    <div className="App">
      <Message message={message} changeMessage={setMessage} />

      <Header onClick={loadAccount} />

      <Blocks />

      <Footer />
    </div>
  );

  async function loadAccount() {
    const web3 = new Web3(Web3.givenProvider);

    window.ethereum?.on('accountsChanged', (accounts: string[]) => {
      dispatch(changeAccount(accounts[0]));
    });

    window.ethereum?.on('chainChanged', async () => {
      const isTestNet = await getIsTestNet();

      changeMessage(isTestNet);
    });

    const isTestNet = await getIsTestNet();
    changeMessage(isTestNet);

    if (!isTestNet) {
      return;
    }

    const accounts = await web3.eth.requestAccounts();

    dispatch(changeAccount(accounts[0]));
  }

  function changeMessage(isTestNet: boolean) {
    setMessage('');

    if (!isTestNet) {
      setMessage('Change net to test net');
    }
  }
}

export default App;

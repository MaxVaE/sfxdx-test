import { useDispatch } from 'react-redux';
import Web3 from 'web3';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { changeAccount } from '../store/account/accountSlice';
import Blocks from '../components/Blocks/Blocks';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header onClick={loadAccount} />

      <Blocks />

      <Footer />
    </div>
  );

  async function loadAccount() {
    const web3 = new Web3(Web3.givenProvider);

    const accounts = await web3.eth.requestAccounts();
    dispatch(changeAccount(accounts[0]));
  }
}

export default App;

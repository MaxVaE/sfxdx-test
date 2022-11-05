import { useDispatch } from 'react-redux';
import Web3 from 'web3';

import Header from '../components/Header/Header';
import { changeAccount } from '../store/account/accountSlice';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header onClick={loadAccount} />
    </div>
  );

  async function loadAccount() {
    const web3 = new Web3(Web3.givenProvider);

    const accounts = await web3.eth.requestAccounts();
    dispatch(changeAccount(accounts[0]));
  }
}

export default App;

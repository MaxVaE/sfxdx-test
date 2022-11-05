import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import Button from '../Button/Button';

import metamstLogo from '../../assets/metamask-logo.svg';
import copyImg from '../../assets/copy.svg';

type WalletProps = {
  onClick: () => unknown;
  className: string;
};

function Wallet({
  className,
  onClick,
}: WalletProps) {
  const account = useSelector((state: RootState) => state.account.value);

  return (
    <div className={clsx('wallet', className)}>
      {account
        ? (
          <div className="wallet__account">
            <img src={metamstLogo} alt="metamask-logo" />

            <div className="wallet__address">
              <span>{account.slice(0, 10)}</span>
              ...
              <span>{account.slice(account.length - 4)}</span>
            </div>

            <button
              type="button"
              className="wallet__copy"
              onClick={() => navigator.clipboard.writeText(account)}
            >
              <img src={copyImg} alt="copy" />
            </button>
          </div>
        )
        : (
          <Button
            onClick={onClick}
            className="wallet__button"
          >
            Connect Wallet
          </Button>
        )}
    </div>
  );
}

export default Wallet;

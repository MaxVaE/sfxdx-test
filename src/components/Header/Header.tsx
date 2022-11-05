import Logo from '../Logo/Logo';
import Wallet from '../Wallet/Wallet';

type HeaderProps = {
  onClick: () => unknown;
};

function Header({
  onClick,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo className="header__logo" />

        <Wallet onClick={onClick} className="header__wallet" />
      </div>
    </header>
  );
}

export default Header;

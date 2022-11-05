import clsx from 'clsx';

import logo from '../../assets/logo.svg';

type LogoProps = {
  className?: string;
};

function Logo({
  className,
}: LogoProps) {
  return (
    <img className={clsx('logo', className)} src={logo} alt="logo" />
  );
}

export default Logo;

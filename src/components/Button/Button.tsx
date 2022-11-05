import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx('button', className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

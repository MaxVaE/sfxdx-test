import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input className={clsx('input', className)} {...props} />
  );
}

export default Input;

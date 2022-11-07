import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input({
  className,
  placeholder,
  id,
  ...props
}: InputProps) {
  return (
    <div className="input">
      <input id={id} placeholder=" " className={clsx('input__control', className)} {...props} />
      <label htmlFor={id} className="input__label">{placeholder}</label>
    </div>
  );
}

export default Input;

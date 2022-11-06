import clsx from 'clsx';

type SwitchProps = {
  checked: boolean;
  onChangeChecked: () => unknown;
};

function Switch({
  checked,
  onChangeChecked,
}: SwitchProps) {
  return (
    <label className="switch">
      <span className={clsx('switch__buy', { 'switch__buy--active': checked })}>Buy</span>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChangeChecked}
      />

      <span className={clsx('switch__sell', { 'switch__sell--active': !checked })}>Sell</span>
    </label>
  );
}

export default Switch;

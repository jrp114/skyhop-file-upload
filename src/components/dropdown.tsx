import classNames from 'classnames';

interface DropdownProps {
  label: string;
  small?: boolean;
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div>
      <button
        className={classNames(
          'border border-gray-400 rounded-lg py-2 px-4 flex text-xs',
          {
            'font-bold': !props.small,
          },
        )}
      >
        {props.label}
        <img
          className={classNames('w-5 h-5 mr-1', {
            'ml-2': props.small,
            'ml-52': !props.small,
          })}
          src="./arrow-down.svg"
          alt="arrow-down"
        />
      </button>
    </div>
  );
}

import classNames from 'classnames';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary' } = props;
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={classNames(
        'text-sm text-white font-bold border-2 border-gray-300 rounded-md p-1 px-10',
        {
          'bg-primary text-white': variant === 'primary',
          'bg-white border border-secondary text-secondary':
            variant === 'secondary',
        },
      )}
    >
      {props.label}
    </button>
  );
}

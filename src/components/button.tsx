import classNames from 'classnames';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md' } = props;
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={classNames(
        'rounded-md border-2 border-gray-300 text-xs font-bold',
        {
          'bg-primary text-white': variant === 'primary',
          'border border-secondary bg-white text-secondary':
            variant === 'secondary',
          'min-w-[175px] p-1 px-8': size === 'sm',
          'min-w-[200px] p-2 px-10 ': size === 'md',
          'p-4': size === 'lg',
        },
      )}
    >
      {props.label}
    </button>
  );
}

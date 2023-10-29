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
        'text-xs font-bold border-2 border-gray-300 rounded-md',
        {
          'bg-primary text-white': variant === 'primary',
          'bg-white border border-secondary text-secondary':
            variant === 'secondary',
          'p-1 min-w-[175px] px-8': size === 'sm',
          'p-2 min-w-[200px] px-10': size === 'md',
          'p-4': size === 'lg',
        },
      )}
    >
      {props.label}
    </button>
  );
}

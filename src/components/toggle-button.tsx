import classNames from 'classnames';

interface ToggleButtonProps {
  toggle: boolean;
  handleToggle: () => void;
}

export default function ToggleButton(props: ToggleButtonProps) {
  return (
    <div
      className={classNames(
        'relative flex h-5 w-9 cursor-pointer items-center rounded-xl border bg-primary',
        {
          'justify-start': !props.toggle,
          'justify-end': props.toggle,
        },
      )}
      onClick={props.handleToggle}
    >
      <div className="absolute h-4 w-4 rounded-full bg-white"></div>
    </div>
  );
}

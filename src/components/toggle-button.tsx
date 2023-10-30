import classNames from 'classnames';

interface ToggleButtonProps {
  toggle: boolean;
  handleToggle: () => void;
}

export default function ToggleButton(props: ToggleButtonProps) {
  return (
    <div
      className={classNames(
        'w-9 h-5 flex items-center border bg-primary rounded-xl relative cursor-pointer',
        {
          'justify-start': !props.toggle,
          'justify-end': props.toggle,
        },
      )}
      onClick={props.handleToggle}
    >
      <div className="w-4 h-4 bg-white rounded-full absolute"></div>
    </div>
  );
}

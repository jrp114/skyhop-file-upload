import classNames from 'classnames';

interface RadioFieldProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function RadioField(props: RadioFieldProps) {
  return (
    <label className="flex items-center px-2 text-xs">
      <div
        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-primary bg-white"
        onClick={props.onChange}
      >
        <div
          className={classNames('h-3 w-3 rounded-full', {
            'bg-primary': props.checked,
          })}
        />
      </div>
      <span className="pl-1">{props.label}</span>
    </label>
  );
}

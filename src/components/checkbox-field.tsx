import classNames from 'classnames';

interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function CheckboxField(props: CheckboxFieldProps) {
  return (
    <label className="px-2 text-xs flex items-center">
      <div
        className="flex justify-center items-center w-5 h-5 border border-primary rounded-full cursor-pointer bg-white"
        onClick={props.onChange}
      >
        <div
          className={classNames('w-3 h-3 rounded-full', {
            'bg-primary': props.checked,
          })}
        />
      </div>
      <span className="pl-1">{props.label}</span>
    </label>
  );
}

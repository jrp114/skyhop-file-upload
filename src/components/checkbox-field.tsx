interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function CheckboxField(props: CheckboxFieldProps) {
  return (
    <label className="p-2 text-xs flex items-center">
      <input
        className="h-5 w-5"
        type="radio"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className="pl-1">{props.label}</span>
    </label>
  );
}

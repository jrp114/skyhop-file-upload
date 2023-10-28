import { ReactNode } from 'react';

interface DropdownProps {
  label: string | ReactNode;
  classes?: string;
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div>
      <button className="border border-gray-400 rounded-lg py-2 px-4 flex text-xs">
        {props.label}
        <img
          className={`w-5 h-5 mr-1 ${props.classes}`}
          src="./arrow-down.svg"
          alt="arrow-down"
        />
      </button>
    </div>
  );
}

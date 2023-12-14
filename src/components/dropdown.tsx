import { ReactNode, useRef, useState } from 'react';
import { useOutsideClick } from './useOutsideClick';

export interface DropdownOption {
  key: string;
  value: string;
  label: string;
}

interface DropdownProps {
  label: string | ReactNode;
  options: Array<DropdownOption>;
  handleClick: (v: DropdownOption) => void;
  classes?: string;
}

/**
 * Dropdown component
 * @param props DropdownProps
 * @returns Dropdown component
 */
export default function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="border border-gray-400 rounded-lg py-2 px-4 w-full flex justify-between text-xs"
      >
        {props.label}
        <img
          className={`w-5 h-5 mr-1 ${props.classes}`}
          src="./arrow-down.svg"
          alt="arrow-down"
        />
      </button>
      {open && (
        <div className="absolute w-full bg-white border border-gray-400 rounded-lg py-2 z-50">
          {props.options.map((option) => (
            <div
              key={option.key}
              onClick={() => {
                setOpen(false);
                props.handleClick(option);
              }}
              className="py-1 text-xs cursor-pointer hover:bg-gray-100 px-4"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
        className="flex w-full justify-between rounded-lg border border-gray-400 px-4 py-2 text-xs"
      >
        {props.label}
        <img
          className={`mr-1 h-5 w-5 ${props.classes}`}
          src="./arrow-down.svg"
          alt="arrow-down"
        />
      </button>
      {open && (
        <div className="absolute z-50 w-full rounded-lg border border-gray-400 bg-white py-2">
          {props.options.map((option) => (
            <div
              key={option.key}
              onClick={() => {
                setOpen(false);
                props.handleClick(option);
              }}
              className="cursor-pointer px-4 py-1 text-xs hover:bg-gray-100"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

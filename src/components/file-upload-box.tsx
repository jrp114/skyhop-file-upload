import classNames from 'classnames';
import { useRef } from 'react';
import Button from './button';

interface FileUploadBoxProps {
  label: string;
  dragOver: boolean;
  handleFileSelect: (file: any) => void;
  handleDrop: (event: any) => void;
  handleDragOver: (event: any) => void;
  handleDragLeave: (event: any) => void;
}

export default function FileUploadBox(props: FileUploadBoxProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="border text-center p-3 w-full m-auto">
      <div
        onDrop={props.handleDrop}
        onDragOver={props.handleDragOver}
        onDragLeave={props.handleDragLeave}
        className={classNames(
          'flex flex-col items-center gap-2 border-2 border-dashed border-gray-300 h-24 text-center p-5 mb-3',
          {
            'bg-gray-200': props.dragOver,
          },
        )}
      >
        <img className="h-5 w-5" src="./file-lines.svg" alt="file" />
        <span className="text-gray-500 text-xs">
          Drag & Drop Here or{' '}
          <span
            onClick={() => fileInputRef?.current?.click()}
            className="font-bold text-primary cursor-pointer"
          >
            Browse
          </span>
        </span>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={props.handleFileSelect}
        style={{ display: 'none' }}
      />
      <Button
        size="sm"
        label={props.label}
        onClick={() => fileInputRef?.current?.click()}
      />
    </div>
  );
}

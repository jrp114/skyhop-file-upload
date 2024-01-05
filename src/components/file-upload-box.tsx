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
    <div className="m-auto w-full border p-3 text-center">
      <div
        onDrop={props.handleDrop}
        onDragOver={props.handleDragOver}
        onDragLeave={props.handleDragLeave}
        className={classNames(
          'mb-3 flex h-24 flex-col items-center gap-2 border-2 border-dashed border-gray-300 p-5 text-center',
          {
            'bg-gray-200': props.dragOver,
          },
        )}
      >
        <img className="h-5 w-5" src="./file-lines.svg" alt="file" />
        <span className="text-xs text-gray-500">
          Drag & Drop Here or{' '}
          <span
            onClick={() => fileInputRef?.current?.click()}
            className="cursor-pointer font-bold text-primary"
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

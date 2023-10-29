import Button from './button';

interface FileUploadBoxProps {
  label: string;
}

export default function FileUploadBox(props: FileUploadBoxProps) {
  return (
    <div className="border text-center p-3 w-full m-auto">
      <div className="flex flex-col items-center gap-2 border-2 border-dashed border-gray-300 h-24 text-center p-5 mb-3">
        <img className="h-5 w-5" src="./file-lines.svg" alt="file" />
        <span className="text-gray-500 text-xs">
          Drag & Drop Here or{' '}
          <span className="font-bold text-primary">Browse</span>
        </span>
      </div>
      <Button
        size="sm"
        label={props.label}
        onClick={() => console.log('click')}
      />
    </div>
  );
}

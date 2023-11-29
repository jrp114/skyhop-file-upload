import React from 'react';

interface FileUploadStatusProps {
  current: number;
  fileName?: string;
  fileSize?: number;
}

const height = 3;
const width = 325;
const scale = width / 100;

export default function FileUploadStatus(props: FileUploadStatusProps) {
  const sizeInMb = React.useMemo(() => {
    if (props.fileSize) {
      return `${(props.fileSize / 1000000).toFixed(1)}MB`;
    }
    return '0MB';
  }, [props.fileSize]);
  return (
    <>
      <div className="border-t border-gray-300 my-3" />
      <div className="pl-2 flex gap-3 items-center">
        <img className="h-5 w-5" src="./file-image.svg" alt="file" />
        <div>
          <div className="flex flex-row justify-between w-full">
            <div className="text-gray-300 text-sm">
              {props.fileName ? props.fileName : 'File Name'}
            </div>
            <div className="text-gray-500 text-2xs font-bold">{sizeInMb}</div>
          </div>
          <svg
            height={height}
            width={width}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMinYMin meet"
          >
            <g>
              <rect
                x={0}
                y={0}
                width={width}
                height={height}
                className="fill-gray-300"
              />
              <rect
                x={0}
                y={0}
                width={props.current * scale}
                height={height}
                className="fill-secondary"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="border-t border-gray-300 my-3" />
    </>
  );
}

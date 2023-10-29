interface FileUploadStatusProps {
  current: number;
  width: number;
  height: number;
  scale: number;
}

export default function FileUploadStatus(props: FileUploadStatusProps) {
  return (
    <>
      <div className="border-t border-gray-300 my-3" />
      <div className="pl-2 flex gap-3 items-center">
        <img className="h-5 w-5" src="./file-image.svg" alt="file" />
        <div>
          <div className="flex flex-row justify-between w-full">
            <div className="text-gray-300 text-sm">File Name</div>
            <div className="text-gray-500 text-2xs font-bold">5.7MB</div>
          </div>
          <svg
            height={props.height}
            width={props.width}
            viewBox={`0 0 ${props.width} ${props.height}`}
            preserveAspectRatio="xMinYMin meet"
          >
            <g>
              <rect
                x={0}
                y={0}
                width={props.width}
                height={props.height}
                className="fill-gray-300"
              />
              <rect
                x={0}
                y={0}
                width={props.current * props.scale}
                height={props.height}
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

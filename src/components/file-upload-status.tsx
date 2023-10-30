interface FileUploadStatusProps {
  current: number;
}

const height = 3;
const width = 325;
const scale = width / 100;

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

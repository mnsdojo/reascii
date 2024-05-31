interface ResizeControlsProps {
  height: number;
  width: number;
  handleHeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWidthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ResizeControls({
  height,
  width,
  handleHeightChange,
  handleWidthChange,
}: ResizeControlsProps) {
  return (
    <div className="absolute bottom-8 left-8 gap-4 flex">
      <div className="flex flex-col items-center">
        <h2>Height</h2>
        <input
          type="range"
          min="1"
          max="50"
          value={height}
          onChange={handleHeightChange}
        />
        <span>{height}</span>
      </div>
      <div className="flex flex-col items-center">
        <h2>Width</h2>
        <input
          type="range"
          min="1"
          max="100"
          value={width}
          onChange={handleWidthChange}
        />
        <span>{width}</span>
      </div>
    </div>
  );
}
export default ResizeControls;

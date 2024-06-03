interface ResizeControlsProps {
  handleIncrement: () => void;
  handleDecrement: () => void;
}

function ResizeControls({
  handleDecrement,
  handleIncrement,
}: ResizeControlsProps) {
  return (
    <div className="absolute bottom-8 left-8 gap-4 flex">
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
export default ResizeControls;

interface ActionButtonsProps {
  handleCopy: () => void;
  handleUndo: () => void;
}

function ActionButtons({ handleCopy, handleUndo }: ActionButtonsProps) {
  return (
    <div className="absolute bottom-8 right-8 flex gap-4">
      <button onClick={handleCopy}>Copy</button>
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}

export default ActionButtons;

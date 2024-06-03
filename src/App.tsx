import { useCallback, useEffect, useState } from "react";
import ArtDisplay from "./components/ArtDisplay";
import ResizeControls from "./components/ResizeControls";
import ActionButtons from "./components/ActionButtons";

function App() {
  const [art, setArt] = useState<string>("");
  const [fontSize, setFontSize] = useState(16);

  const handlePaste = useCallback((e: ClipboardEvent) => {
    const pastedText = e.clipboardData?.getData("text/plain");
    if (pastedText) {
      setArt(pastedText);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, [handlePaste]);

  const handleUndo = () => {
    setArt("");
  };

  const handleIncrement = () => setFontSize(fontSize + 1);
  const handleDecrement = () => setFontSize(Math.max(8, fontSize - 1));
  const handleCopy = () => {
    if (art.trim().length) return;
    navigator.clipboard.writeText(art);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white flex items-center justify-center">
      <div className="w-full space-y-4 text-center">
        <h1 className="text-4xl font-bold">ReAscii</h1>
        <ArtDisplay art={art} size={fontSize} />
        {art.length !== 0 && (
          <>
            <ResizeControls
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
            <ActionButtons handleCopy={handleCopy} handleUndo={handleUndo} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

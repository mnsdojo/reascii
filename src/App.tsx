import React, { useCallback, useEffect, useState } from "react";
import ArtDisplay from "./components/ArtDisplay";
import ResizeControls from "./components/ResizeControls";
import ActionButtons from "./components/ActionButtons";

function App() {
  const [art, setArt] = useState<string>("");
  const [croppedArt, setCroppedArt] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const handleWidthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newWidth = parseInt(e.target.value);
      setWidth(newWidth);
      setCroppedArt(resizeArt(art, height, newWidth));
    },
    [art, height]
  );

  const handleHeightChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newHeight = parseInt(e.target.value);
      setHeight(newHeight);
      setCroppedArt(resizeArt(art, newHeight, width));
    },
    [art, width]
  );

  const handlePaste = useCallback((e: ClipboardEvent) => {
    const pastedText = e.clipboardData?.getData("text/plain");
    if (pastedText) {
      setArt(pastedText);
      const lines = pastedText.split("\n");
      const maxHeight = lines.length;
      const maxWidth = Math.max(...lines.map((line) => line.length));
      setHeight(maxHeight);
      setWidth(maxWidth);
      setCroppedArt(resizeArt(pastedText, maxHeight, maxWidth));
    }
  }, []);

  const resizeArt = (art: string, newHeight: number, newWidth: number) => {
    const lines = art.split("\n").slice(0, newHeight); // Slice to desired height
    const resizedArt = lines.map((line) => {
      // Adjust each line to desired width
      return line.slice(0, newWidth).padEnd(newWidth, " ");
    });
    return resizedArt.join("\n"); // Join lines back together
  };

  useEffect(() => {
    window.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, [handlePaste]);

  const handleUndo = () => {
    setArt("");
    setHeight(0);
    setWidth(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(croppedArt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white flex items-center justify-center">
      <div className="w-full space-y-4 text-center">
        <h1 className="text-4xl font-bold">ReAscii</h1>
        <ArtDisplay art={art} croppedArt={croppedArt} />
        <ResizeControls
          width={width}
          height={height}
          handleHeightChange={handleHeightChange}
          handleWidthChange={handleWidthChange}
        />
        <ActionButtons handleCopy={handleCopy} handleUndo={handleUndo} />
      </div>
    </div>
  );
}

export default App;

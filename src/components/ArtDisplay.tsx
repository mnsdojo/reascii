function ArtDisplay({ art, size }: { art: string; size: number }) {
  return (
    <div className="flex items-center justify-center">
      <div style={{ fontSize: size }}>
        {art ? (
          <pre>{art}</pre>
        ) : (
          <p className="font-medium">Paste your art here by "Ctrl+C"</p>
        )}
      </div>
    </div>
  );
}

export default ArtDisplay;

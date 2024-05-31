interface Props {
  art: string;
  croppedArt: string;
}

function ArtDisplay({ art, croppedArt }: Props) {
  return (
    <div className="flex items-center justify-center">
      {art ? (
        <pre>{croppedArt}</pre>
      ) : (
        <p className="font-medium">Paste your art here by "Ctrl+C"</p>
      )}
    </div>
  );
}

export default ArtDisplay;

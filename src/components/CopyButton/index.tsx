import React, { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
  buttonLabel?: string;
  successMessage?: string;
  failureMessage?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  buttonLabel = "Copy",
  successMessage = "Copied!",
  failureMessage = "Failed to copy!"
}) => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(successMessage);
    } catch (err) {
      setCopySuccess(failureMessage);
    }
  };

  return (
    <div className="text-center mt-6">
      <p className="text-lg">{textToCopy}</p>
      <button
        onClick={handleCopy}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {buttonLabel}
      </button>
      {copySuccess && <p className="mt-2 text-lg">{copySuccess}</p>}
    </div>
  );
};

export default CopyButton;

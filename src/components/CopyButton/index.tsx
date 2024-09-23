import React, { useState } from "react";

const CopyButton: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const textToCopy = "Hello, this is the text to copy!";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p style={{ fontSize: "18px" }}>{textToCopy}</p>
      <button
        onClick={handleCopy}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          margin: "10px",
        }}
      >
        Copy
      </button>
      {copySuccess && <p style={{ marginTop: "10px", fontSize: "18px" }}>{copySuccess}</p>}
    </div>
  );
};

export default CopyButton;

import React, { useState } from "react";

const TextInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <label htmlFor="textInput" style={{ fontSize: "18px" }}>
        Enter text:
      </label>
      <input
        id="textInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{ marginLeft: "10px", padding: "5px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        You typed: <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

export default TextInput;

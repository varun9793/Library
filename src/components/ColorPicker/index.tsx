import React, { useState } from "react";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>("#000000");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <label htmlFor="colorPicker" style={{ fontSize: "18px" }}>
        Choose a color: 
      </label>
      <input
        id="colorPicker"
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ marginLeft: "10px", cursor: "pointer" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Selected color: <span style={{ color: color }}>{color}</span>
      </p>
    </div>
  );
};

export default ColorPicker;

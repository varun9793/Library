import React, { useState } from "react";

interface ColorPickerProps {
  label?: string;
  defaultColor?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label = "Choose a color", defaultColor = "#000000" }) => {
  const [color, setColor] = useState<string>(defaultColor);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <label htmlFor="colorPicker" className="text-lg font-medium">
        {label}:
      </label>
      <input
        id="colorPicker"
        type="color"
        value={color}
        onChange={handleColorChange}
        className="mt-2 cursor-pointer"
      />
      <p className="mt-4 text-lg">
        Selected color:{" "}
        <span className="font-bold" style={{ color: color }}>
          {color}
        </span>
      </p>
    </div>
  );
};

export default ColorPicker;

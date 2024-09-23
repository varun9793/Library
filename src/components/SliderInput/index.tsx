import React, { useState } from "react";

const SliderInput: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <label htmlFor="sliderInput" style={{ fontSize: "18px" }}>
        Adjust value:
      </label>
      <input
        id="sliderInput"
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        style={{ marginLeft: "10px", cursor: "pointer" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Slider value: <strong>{sliderValue}</strong>
      </p>
    </div>
  );
};

export default SliderInput;

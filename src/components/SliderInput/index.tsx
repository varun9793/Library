import React, { useState } from "react";

interface SliderInputProps {
  min?: number;
  max?: number;
  initialValue?: number;
  label?: string;
  sliderWidth?: string;
}

const SliderInput: React.FC<SliderInputProps> = ({
  min = 0,
  max = 100,
  initialValue = 50,
  label = "Adjust value:",
  sliderWidth = "w-full",
}) => {
  const [sliderValue, setSliderValue] = useState<number>(initialValue);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="text-center mt-6">
      <label htmlFor="sliderInput" className="text-lg">
        {label}
      </label>
      <input
        id="sliderInput"
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={handleSliderChange}
        className={`ml-4 cursor-pointer ${sliderWidth}`}
      />
      <p className="mt-4 text-lg">
        Slider value: <strong>{sliderValue}</strong>
      </p>
    </div>
  );
};

export default SliderInput;

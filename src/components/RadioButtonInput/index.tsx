import React, { useState } from "react";

interface RadioButtonInputProps {
  options: string[]; // List of radio button options
  onOptionChange?: (selectedOption: string) => void; // Callback for option change
  label: string; // Label for the paragraph text
  size: 'small' | 'medium' | 'large'; // Define size as a string for easier control
}

const RadioButtonInput: React.FC<RadioButtonInputProps> = ({ options, onOptionChange, label, size }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value;
    setSelectedOption(selected);

    if (onOptionChange) {
      onOptionChange(selected); // Trigger the callback function
    }
  };

  // Define size classes based on the 'size' prop
  const sizeClass = size === 'small' ? 'h-4 w-4' : size === 'medium' ? 'h-6 w-6' : 'h-8 w-8';

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-lg font-semibold">{label}</p>

      <div className="space-x-4">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className={`form-radio ${sizeClass} text-blue-600`}
            />
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>

      <p className="mt-4 text-lg">
        You selected: <strong>{selectedOption || "None"}</strong>
      </p>
    </div>
  );
};

export default RadioButtonInput;

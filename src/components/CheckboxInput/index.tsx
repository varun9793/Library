import React, { useState } from "react";

interface CheckboxInputProps {
  label: string; // The label text for the checkbox
  initialChecked?: boolean; // Initial checked state of the checkbox
  onChange?: (checked: boolean) => void; // Callback when checkbox state changes
  size: 'small' | 'medium' | 'large';
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, initialChecked = false, onChange, size }) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (onChange) {
      onChange(checked); // Trigger the callback function
    }
  };

  const sizeClass = size === 'small' ? 'h-4 w-4' : size === 'medium' ? 'h-6 w-6' : 'h-8 w-8';

  return (
    <div className="text-center mt-5">
      <label htmlFor="checkboxInput" className="text-lg">
        {label}
      </label>
      <input
        id="checkboxInput"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className= {`ml-3 cursor-pointer ${sizeClass} `}
      />
      
      <p className="mt-5 text-lg">
        You have {isChecked ? "accepted" : "not accepted"} the terms.
      </p>
    </div>
  );
};

export default CheckboxInput;

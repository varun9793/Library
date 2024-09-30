import React, { useState } from "react";

// Define the interface for the props
interface TextInputProps {
  label: string;       // The label for the input field
  placeholder: string; // The placeholder text for the input field
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState<string>(""); // State to manage the input value

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update the state with the new input value
  };

  return (
    <div className="flex flex-col items-center mt-5"> {/* Flex container for vertical layout */}
      <label htmlFor="textInput" className="text-lg font-medium mb-2"> {/* Label with margin */}
        {label} 
      </label>
      <input
        id="textInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Attach change handler
        placeholder={placeholder} // Use placeholder prop
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Tailwind styling
      />
      <p className="mt-3 text-lg"> {/* Display the typed input */}
        You typed: <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

export default TextInput; // Export the component

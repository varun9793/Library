import React, { useState } from "react";

interface CloseButtonProps {
  message: string;
  size:'small'|'medium' | 'large';
}

const CloseButton: React.FC<CloseButtonProps> = ({ message, size }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const sizeClass = size === 'small' ? 'h-4 w-4' : size === 'medium'? 'h-6 w-6' : 'h-8 w-8';
  return (
    <div className="text-center mt-5">
      {isVisible && (
        <div className="p-5 border border-gray-300 inline-block relative text-lg">
          <p>{message}</p>
          <button
            onClick={handleClose}
            className="absolute top-1 right-1 p-2 cursor-pointer text-sm bg-red-500 text-white border-none rounded flex items-center justify-center"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${sizeClass}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9.293l4.146-4.147a1 1 0 011.414 1.414L11.414 10l4.146 4.147a1 1 0 01-1.414 1.414L10 11.414l-4.146 4.147a1 1 0 01-1.414-1.414L8.586 10 4.44 5.854a1 1 0 011.414-1.414L10 9.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default CloseButton;

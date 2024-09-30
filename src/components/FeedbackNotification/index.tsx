import React, { useState } from "react";

interface FeedbackNotificationProps {
  title?: string;
  message?: string;
  bgColor?: string;
  borderColor?: string;
}

const FeedbackNotification: React.FC<FeedbackNotificationProps> = ({
  title = "Notification",
  message = "This is your default message.",
  bgColor = "bg-white",
  borderColor = "border-blue-500",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className={`flex items-center justify-between ${bgColor} ${borderColor} border-l-4 shadow-md rounded-md p-4 w-96 mx-auto mt-5`}
        >
          <div>
            <p className="font-semibold text-lg m-0">{title}</p>
            <p className="text-gray-600 text-sm m-0">{message}</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-lg font-bold focus:outline-none"
          >
            &#x2715;
          </button>
        </div>
      )}
    </>
  );
};

export default FeedbackNotification;

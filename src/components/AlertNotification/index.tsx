import React from "react";

const AlertNotification: React.FC = () => {
  return (
    <div className="flex items-center bg-blue-50 border border-blue-300 rounded-lg p-4 w-96 mx-auto my-5">
      {/* Icon */}
      <div className="mr-3 text-blue-600 text-2xl">
        &#9432;
      </div>

      {/* Text Content */}
      <div>
        <p className="m-0 font-semibold text-blue-600 text-lg">Alert title</p>
        <p className="m-0 text-sm text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis,
          quae tempore necessitatibus placeat saepe.
        </p>
      </div>
    </div>
  );
};

export default AlertNotification;

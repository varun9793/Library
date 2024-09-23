import React, { useState } from "react";

const FeedbackNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            width: "400px",
            margin: "20px auto",
            position: "relative",
          }}
        >
          <div
            style={{
              borderLeft: "4px solid #1976d2",
              paddingLeft: "12px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              We notify you that
            </p>
            <p
              style={{
                margin: 0,
                color: "#616161",
                fontSize: "14px",
              }}
            >
              You are now obligated to give a star to Mantine project on GitHub
            </p>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              color: "#616161",
            }}
          >
            &#x2715;
          </button>
        </div>
      )}
    </>
  );
};

export default FeedbackNotification;

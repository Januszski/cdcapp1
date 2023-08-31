import React from "react";

const Frame = ({ children }) => {
  return (
    <>
      <div className="ambient-background">
        <div className="flex min-h-fit pt-36 ambient-background">
          <div className="w-1/4 p-8">{/* Left Column Content */}</div>
          <div className="flex-1 ">{children}</div>
          <div className="w-1/4 p-8">{/* Right Column Content */}</div>
        </div>
      </div>
    </>
  );
};

export default Frame;

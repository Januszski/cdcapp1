import React from "react";
import ImageSection from "./ImageSection";

/* @ts-ignore */
const Frame = ({ children, imageURL }) => {
  return (
    <>
      <div className="ambient-background">
        <div className="flex py-8 ambient-background">
          <div className="w-1/4 p-8">
            <ImageSection imageUrl={imageURL} />
          </div>
          <div className="flex-1">{children}</div>
          <div className="w-1/4 p-8">
            {" "}
            <ImageSection imageUrl={imageURL} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame;

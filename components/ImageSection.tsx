import React from "react";
import Image from "next/image";
/* @ts-ignore */

const ImageSection = ({ imageUrl }) => {
  return (
    <span className="flex items-center justify-center h-3/4 ambient-background">
      <Image
        src={imageUrl}
        alt={"altText"}
        layout="responsive"
        width="10"
        height="10"
      />
    </span>
  );
};

export default ImageSection;

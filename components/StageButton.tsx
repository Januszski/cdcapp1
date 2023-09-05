"use client;";

import Link from "next/link";
import { useState } from "react";

const StageButton = ({ onPress, isPressed }) => {
  return (
    <span className="flex flex-col justify-start flex-grow ">
      <button
        className={` border-2 border-green-600 border-opacity-50 rounded-full p-3 content-center justify-center ${
          isPressed ? "bg-green-600 text-white" : "bg-gray-900 text-gray-700"
        }`}
        onClick={onPress}
      ></button>
    </span>
  );
};

export default StageButton;

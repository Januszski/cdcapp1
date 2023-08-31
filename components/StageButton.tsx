"use client;";

import Link from "next/link";
import { useState } from "react";

const StageButton = ({ onPress, isPressed }) => {
  return (
    <span className="flex flex-col items-center justify-start">
      <button
        className={`rounded-full p-3 content-center justify-center ${
          isPressed ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
        }`}
        onClick={onPress}
      >
        STAGE
      </button>
    </span>
  );
};

export default StageButton;

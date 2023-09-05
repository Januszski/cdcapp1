"use client;";

import Link from "next/link";
import { useState } from "react";
/* @ts-ignore */
const MonitorButton = ({ onPress, isPressed }) => {
  // const [activeButton, setActiveButton] = useState(1);

  return (
    <span className="flex flex-col   justify-start">
      <button
        className={`border-2 border-green-600 border-opacity-50 rounded-full p-3 ${
          isPressed ? "bg-green-600 text-white" : "bg-gray-900 text-gray-700"
        }`}
        onClick={onPress}
      ></button>
    </span>
  );
};

export default MonitorButton;

"use client;";

import Link from "next/link";
import { useState } from "react";

const MonitorButton = ({ onPress, isPressed }) => {
  // const [activeButton, setActiveButton] = useState(1);

  return (
    <span className="flex flex-col items-center justify-start">
      <button
        className={`rounded-full p-3 ${
          isPressed ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
        }`}
        onClick={onPress}
      >
        MONITOR
      </button>
    </span>
  );
};

export default MonitorButton;

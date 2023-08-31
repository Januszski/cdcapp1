import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import ContinuousSlider from "./ContinuousSlider";
import { TextField } from "@mui/material";
import SongInput from "./SongInput";

const ControlPanel = ({
  lightNone,
  light1,
  light2,
  lightBoth,
  b1Pressed,
  b2Pressed,
  setText,
  setSlider,
}) => {
  console.log("B1PRESSED", b1Pressed);
  console.log("B2PRESSED", b2Pressed);

  return (
    <div className="flex  h-max justify-between flex-wrap items-center">
      <span className=" flex-row items-center justify-start ">
        <button
          className={`rounded-full p-3 ${
            b1Pressed ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
          onClick={
            b1Pressed
              ? b2Pressed
                ? light2
                : lightNone
              : b2Pressed
              ? lightBoth
              : light1
          }
        >
          LIGHTS 1
        </button>
      </span>

      <span className="">
        <button
          className={`rounded-full p-3 ${
            b2Pressed ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
          onClick={
            b2Pressed
              ? b1Pressed
                ? light1
                : lightNone
              : b1Pressed
              ? lightBoth
              : light2
          }
        >
          LIGHTS 2
        </button>
      </span>
      <div className="">
        <SongInput setText={setText} />
      </div>
      <div className="">
        <ContinuousSlider setSlider={setSlider} />
      </div>
    </div>
  );
};

export default ControlPanel;

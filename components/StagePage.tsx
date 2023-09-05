"use client";

import React, { useEffect, useState } from "react";
import ImageSection from "./ImageSection";
import Frame from "./Frame";
import ControlPanel from "./ControlPanel";
import { Press_Start_2P } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const StagePage = ({
  /* @ts-ignore */
  currentStage,
  /* @ts-ignore */
  setCurrentStage,
  /* @ts-ignore */
  stageText,
  /* @ts-ignore */
  setStageText,
  /* @ts-ignore */
  disabled,
  /* @ts-ignore */
  setDisabled,
  /* @ts-ignore */
  sliderVal,
  /* @ts-ignore */
  setSliderVal,
}) => {
  //const [currentStage, setCurrentStage] = useState("lightNone");
  // const [stageText, setStageText] = useState("Wolf Moon - Type O Negative");
  // const [disabled, setDisabled] = useState(false);

  // const [sliderVal, setSliderVal] = useState(30);

  // const funcArr = [
  //   () => setCurrentStage("lightNone"),
  //   () => setCurrentStage("light1"),
  //   () => setCurrentStage("light2"),
  //   () => setCurrentStage("lightBoth"),

  const strobePressed = () => {
    setCurrentStage("light4");
    setDisabled(true);
  };

  const lightNone = () => {
    setCurrentStage("lightNone");
    setDisabled(false);
  };
  // ];

  let url;

  if (currentStage === "lightNone") {
    url = "/paint/Stage0.png";
  } else if (currentStage === "light1") {
    url = "/paint/Stage1.png";
  } else if (currentStage === "light2") {
    url = "/paint/Stage2.png";
  } else if (currentStage === "lightBoth") {
    url = "/paint/Stage3.png";
  } else {
    url = "/ezgif.com-gif-maker.gif";
  }

  let imageURL;

  if (sliderVal === 0) {
    imageURL = "/paint/subwoofer0.png";
  } else if (sliderVal < 33) {
    imageURL = "/paint/subwoofer1.png";
  } else if (sliderVal < 66) {
    imageURL = "/paint/subwoofer2.png";
  } else {
    imageURL = "/paint/subwoofer3.png";
  }

  //length of . is 1, length of - is 3, between letters is 3
  // .-..    ---    ---    -.-    .-    .--    .-    -.--

  return (
    <>
      <div className="ambient-background h-screen">
        <Frame imageURL={imageURL}>
          <div className="flex flex-col">
            <span className="text-green-600  flex justify-center flex-end">
              <span className={`${press.className} text-xl`}> {stageText}</span>
            </span>

            <ImageSection imageUrl={url} />
          </div>
        </Frame>

        <div className="flex flex-col flex-grow ambient-background-light  justify-between items-center border-2 border-green-600">
          <div className={`${bebas.className} text-xl`}> Control Panel</div>
          <ControlPanel
            lightNone={lightNone}
            light1={() => setCurrentStage("light1")}
            light2={() => setCurrentStage("light2")}
            lightBoth={() => setCurrentStage("lightBoth")}
            b1Pressed={
              currentStage === "light1" || currentStage === "lightBoth"
            }
            b2Pressed={
              currentStage === "light2" || currentStage === "lightBoth"
            }
            setText={setStageText}
            setSlider={setSliderVal}
            sliderVal={sliderVal}
            setStrobe={strobePressed}
            b3Pressed={currentStage === "light4"}
            isDisabled={disabled}
          />
        </div>
      </div>
    </>
  );
};

export default StagePage;

"use client";

import React, { useState } from "react";
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

const StagePage = () => {
  const [currentStage, setCurrentStage] = useState("lightNone");
  console.log("STATE", currentStage);
  const [stageText, setStageText] = useState(
    "Type O Negative - I Don't Wanna Be Me"
  );

  const [sliderVal, setSliderVal] = useState(30);

  console.log("SLIDER VAL IN PAGE", sliderVal);

  // const funcArr = [
  //   () => setCurrentStage("lightNone"),
  //   () => setCurrentStage("light1"),
  //   () => setCurrentStage("light2"),
  //   () => setCurrentStage("lightBoth"),
  // ];

  let url;

  if (currentStage === "lightNone") {
    url = "/paint/Stage0.png";
  } else if (currentStage === "light1") {
    url = "/paint/Stage1.png";
  } else if (currentStage === "light2") {
    url = "/paint/Stage2.png";
  } else {
    url = "/paint/Stage3.png";
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

  console.log("STAGE TEXT", stageText);

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
            lightNone={() => setCurrentStage("lightNone")}
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
          />
        </div>
      </div>
    </>
  );
};

export default StagePage;

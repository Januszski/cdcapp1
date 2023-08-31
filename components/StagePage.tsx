"use client";

import React, { useState } from "react";
import ImageSection from "./ImageSection";
import Frame from "./Frame";
import ControlPanel from "./ControlPanel";
import { Press_Start_2P } from "next/font/google";

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

  // const funcArr = [
  //   () => setCurrentStage("lightNone"),
  //   () => setCurrentStage("light1"),
  //   () => setCurrentStage("light2"),
  //   () => setCurrentStage("lightBoth"),
  // ];

  let url;

  if (currentStage === "lightNone") {
    url = "/stagetest1.png";
  } else if (currentStage === "light1") {
    url = "/yellowtest.jpeg";
  } else if (currentStage === "light2") {
    url = "/bluetest.jpeg";
  } else {
    url = "/greentest.jpeg";
  }

  console.log("STAGE TEXT", stageText);

  return (
    <>
      <div className="">
        <div className="ambient-background h-3/4 ">
          <span className="text-green-600  flex justify-center">
            <span className={`${press.className} text-xl`}> {stageText}</span>
          </span>
          <Frame>
            <ImageSection imageUrl={url} />
          </Frame>
        </div>
        <div className="flex ambient-background-light justify-between items-center">
          <div className="flex-grow ">
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StagePage;

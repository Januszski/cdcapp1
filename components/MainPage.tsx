import React, { useRef, useState } from "react";
import StageButton from "./StageButton";
import MonitorButton from "./MonitorButton";
import StagePage from "./StagePage";
import MonitorPage from "./MonitorPage";

const MainPage = () => {
  const [activeButton, setActiveButton] = useState("stage");
  const [currentStage, setCurrentStage] = useState("lightNone");
  const [stageText, setStageText] = useState("Ise Ise Baby - Vanilla Ise");
  const [disabled, setDisabled] = useState(false);

  const [sliderVal, setSliderVal] = useState(30);

  const [buttonPressed, setButtonPressed] = useState(false);
  const [gaugeVal, setGaugeVal] = useState(0);
  const [gaugeVal2, setGaugeVal2] = useState(0);

  //const [index, setIndex] = useState(0);
  const indexRef = useRef(0); // Use a useRef to store the mutable index value

  const [chats, setChats] = useState<{ username: string; chat: string }[]>([]);
  const [userText, setUserText] = useState("");
  const [buttonPressedAuto, setButtonPressedAuto] = useState(false);
  const indexRef1 = useRef(0); // Use a useRef to store the mutable index value
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <span className="ambient-background">
        <span className="flex flex-row items-center justify-center ambient-background ">
          <span className="flex justify-center">
            {" "}
            <StageButton
              onPress={() => setActiveButton("stage")}
              isPressed={activeButton === "stage"}
            />{" "}
          </span>
          <span>
            {" "}
            <MonitorButton
              onPress={() => setActiveButton("monitor")}
              isPressed={activeButton === "monitor"}
            />{" "}
          </span>
        </span>
      </span>

      {activeButton === "stage" ? (
        <StagePage
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
          stageText={stageText}
          setStageText={setStageText}
          disabled={disabled}
          setDisabled={setDisabled}
          sliderVal={sliderVal}
          setSliderVal={setSliderVal}
        />
      ) : (
        <MonitorPage
          buttonPressed={buttonPressed}
          setButtonPressed={setButtonPressed}
          gaugeVal={gaugeVal}
          setGaugeVal={setGaugeVal}
          gaugeVal2={gaugeVal2}
          setGaugeVal2={setGaugeVal2}
          indexRef={indexRef}
          chats={chats}
          setChats={setChats}
          userText={userText}
          setUserText={setUserText}
          buttonPressedAuto={buttonPressedAuto}
          setButtonPressedAuto={setButtonPressedAuto}
          indexRef1={indexRef1}
          scrollRef={scrollRef}
        />
      )}
    </>
  );
};

export default MainPage;

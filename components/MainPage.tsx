import React, { useState } from "react";
import StageButton from "./StageButton";
import MonitorButton from "./MonitorButton";
import StagePage from "./StagePage";
import MonitorPage from "./MonitorPage";

const MainPage = () => {
  const [activeButton, setActiveButton] = useState("stage");

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

      {activeButton === "stage" ? <StagePage /> : <MonitorPage />}
    </>
  );
};

export default MainPage;

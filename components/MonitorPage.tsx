import React, { useEffect, useRef, useState } from "react";
import { MonitorChat } from "./MonitorChat";
import ChatTest from "./Chat";
import Gauge from "./Gauge";
import Gauge2 from "./Gauge2";
import LiveGraph from "./LiveData";

const MonitorPage = ({
  /* @ts-ignore */
  buttonPressed,
  /* @ts-ignore */
  setButtonPressed,
  /* @ts-ignore */
  gaugeVal,
  /* @ts-ignore */
  setGaugeVal,
  /* @ts-ignore */
  gaugeVal2,
  /* @ts-ignore */
  setGaugeVal2,
  /* @ts-ignore */
  indexRef,
  /* @ts-ignore */
  chats,
  /* @ts-ignore */
  setChats,
  /* @ts-ignore */
  userText,
  /* @ts-ignore */
  setUserText,
  /* @ts-ignore */
  buttonPressedAuto,
  /* @ts-ignore */
  setButtonPressedAuto,
  /* @ts-ignore */
  indexRef1,
  /* @ts-ignore */
  scrollRef,
}) => {
  // const [buttonPressed, setButtonPressed] = useState(false);
  // const [gaugeVal, setGaugeVal] = useState(0);
  // const [gaugeVal2, setGaugeVal2] = useState(0);

  // //const [index, setIndex] = useState(0);
  // const indexRef = useRef(0); // Use a useRef to store the mutable index value

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function zero() {
    return getRandomInt(1, 50);
  }

  function one() {
    return getRandomInt(51, 101);
  }

  useEffect(() => {
    // const gaugeArrNoise = [
    //   49, 80, 84, 45, 33, 48, 78, 87, 0, 15, 67, 73, 36, 42, 67, 47, 29, 0, 20,
    //   55, 63, 27, 35, 42, 57, 68, 0, 14, 62, 59, 70, 75, 42, 63, 70, 0, 18, 53,
    //   62, 33, 65, 70, 62, 45, 0, 10, 37, 54, 52, 32, 36, 40, 29, 0, 12, 31, 56,
    //   69, 43, 45, 49, 55, 0, 19, 55, 63, 80, 44, 47, 65, 79, 0, 37, 32, 60, 76,
    //   24, 39, 74, 85, 0, 11, 78, 86, 90, 100, 10, 31, 67, 0, 35, 68, 72, 85, 92,
    //   99, 43, 78, 0, 0, 0,
    // ];

    const gaugeArrNoise = [
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      zero(),
      one(),
      one(),
      0,
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      one(),
      zero(),
      zero(),
      0,
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      zero(),
      one(),
      one(),
      0,
      zero(),
      one(),
      one(),
      one(),
      one(),
      zero(),
      one(),
      one(),
      0,
      zero(),
      one(),
      one(),
      zero(),
      one(),
      one(),
      one(),
      zero(),
      0,
      zero(),
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      zero(),
      zero(),
      0,
      zero(),
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      zero(),
      one(),
      0,
      zero(),
      one(),
      one(),
      one(),
      zero(),
      zero(),
      one(),
      one(),
      0,
      zero(),
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      one(),
      one(),
      0,
      zero(),
      one(),
      one(),
      one(),
      one(),
      zero(),
      zero(),
      one(),
      0,
      zero(),
      one(),
      one(),
      one(),
      one(),
      one(),
      zero(),
      one(),
      0,
      0,
      0,
      0,
    ];

    // const gaugeArrCrowd = [
    //   33, 65, 40, 31, 48, 22, 61, 74, 0, 23, 77, 84, 34, 40, 45, 31, 40, 0, 21,
    //   67, 70, 41, 28, 11, 15, 19, 0, 34, 64, 89, 91, 72, 14, 57, 46, 0, 32, 85,
    //   76, 33, 6, 79, 80, 93, 0, 32, 47, 74, 89, 47, 40, 45, 60, 0, 30, 67, 70,
    //   78, 34, 65, 67, 80, 0, 29, 65, 70, 68, 40, 71, 75, 68, 0, 13, 20, 56, 63,
    //   12, 62, 32, 20, 0, 42, 38, 22, 46, 21, 32, 44, 39, 0, 37, 72, 83, 52, 39,
    //   23, 22, 87, 0, 0, 0,
    // ];

    const gaugeArrCrowd = [
      zero(),
      one(),
      zero(),
      zero(),
      zero(),
      zero(),
      one(),
      one(),
      0,
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      zero(),
      zero(),
      zero(),
      0,
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      zero(),
      zero(),
      zero(),
      0,
      zero(),
      one(),
      one(),
      one(),
      one(),
      zero(),
      one(),
      zero(),
      0,
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      one(),
      one(),
      one(),
      0,
      zero(),
      zero(),
      one(),
      one(),
      zero(),
      zero(),
      zero(),
      one(),
      0,
      zero(),
      one(),
      one(),
      one(),
      zero(),
      one(),
      one(),
      one(),
      0,
      zero(),
      one(),
      one(),
      one(),
      zero(),
      one(),
      one(),
      one(),
      0,
      zero(),
      zero(),
      one(),
      one(),
      zero(),
      one(),
      zero(),
      zero(),
      0,
      zero(),
      zero(),
      zero(),
      zero(),
      zero(),
      zero(),
      zero(),
      zero(),
      0,
      zero(),
      one(),
      one(),
      one(),
      zero(),
      zero(),
      zero(),
      one(),
      0,
      0,
      0,
      0,
    ];

    const interval = setInterval(() => {
      setGaugeVal(gaugeArrNoise[indexRef.current]);
      setGaugeVal2(gaugeArrCrowd[indexRef.current]);

      indexRef.current = (indexRef.current + 1) % gaugeArrNoise.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{ display: "flex" }}
        className="ambient-background h-screen justify-between"
      >
        <div
          className=" flex-grow flex-col"
          style={{ marginLeft: "40px", marginTop: "40px" }}
        >
          <ChatTest
            chats={chats}
            setChats={setChats}
            userText={userText}
            setUserText={setUserText}
            buttonPressedAuto={buttonPressedAuto}
            setButtonPressedAuto={setButtonPressedAuto}
            indexRef1={indexRef1}
            /* @ts-ignore */
            scrollRef={scrollRef}
          />
        </div>
        <div
          className="flex justify-items-end  flex-wrap"
          style={{ marginLeft: "12vw", marginTop: "40px" }}
        >
          <Gauge value={gaugeVal} />
          <Gauge2 value={gaugeVal2} />
          {/* <LiveGraph /> */}
        </div>
      </div>
    </>
  );
};

export default MonitorPage;

import React from "react";
import { MonitorChat } from "./MonitorChat";
import ChatTest from "./Chat";
import Gauge from "./Gauge";

const MonitorPage = () => {
  return (
    <>
      <div style={{ display: "flex" }} className="ambient-background h-screen">
        <div style={{ flex: 1 }}>
          <ChatTest />
        </div>
        <div className="flex justify-self-end">
          <Gauge value={78} />
        </div>
      </div>
    </>
  );
};

export default MonitorPage;

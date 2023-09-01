import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const usernames = ["testUser", "testUser2", "testUser3"];

const chats = ["foo", "bar", "baz"];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const MonitorChat = () => {
  const [activeChats, setActiveChats] = useState<
    { username: string; chat: string }[]
  >([]);
  const [savedInterval, saveInterval] = useState<NodeJS.Timer>();

  const ref = useRef<HTMLDivElement>(null);

  const addChat = (username: string, chat: string) => {
    setActiveChats((oldChats) => [...oldChats, { username, chat }]);
    console.log("CHAT ADDED");
    //window.scrollTo(0, document.body.scrollHeight);
  };

  window.HTMLElement.prototype.scrollIntoView = function () {};

  // const scrollDown = () => {
  //   document.getElementById(activeChats.length.toString());
  //   scrollDown.scrollIntoView();
  // };

  useEffect(() => {
    clearInterval(savedInterval);

    const interval = setInterval(() => {
      const selectedUser = usernames[getRandomInt(0, usernames.length - 1)];
      const selectedChat = chats[getRandomInt(0, chats.length)];

      addChat(selectedUser, selectedChat);
    }, getRandomInt(250, 1000));

    saveInterval(interval);
  }, []);

  useEffect(() => {
    if (activeChats.length) {
      console.log("THIS PRINTS");
      console.log(ref.current);
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [activeChats.length]);

  return (
    // <div className="bg-gray-800">
    //   <span className="text-white font-bold text-4xl">Chat</span>

    //   <div className="flex flex-col overflow-y-scroll max-h-64">
    //     {activeChats.map((data, index) => (
    //       <p key={index} className="text-white font-semibold">
    //         {data.username}: {data.chat}
    //       </p>
    //     ))}
    //   </div>
    // </div>
    // <Box
    //   sx={{
    //     width: 500,
    //     height: 500,
    //     backgroundColor: "primary.dark",
    //     "&:hover": {
    //       backgroundColor: "primary.main",
    //       opacity: [0.9, 0.8, 0.7],
    //     },
    //   }}
    // >
    <div className="flex flex-col overflow-y-scroll max-h-64 scroll-auto will-change-scroll">
      {activeChats.map((data, index) => (
        <>
          <p
            key={index}
            id={index.toString()}
            className="bg-purple-900 font-semibold"
          >
            {data.username}: {data.chat}
          </p>
        </>
      ))}
      <div ref={ref}> aaaaaa </div>
    </div>
    // </Box>
  );
};

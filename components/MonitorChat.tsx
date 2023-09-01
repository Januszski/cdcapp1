import React, { useEffect, useState } from "react";

const usernames = ["testUser", "testUser2", "testUser3"];

const chats = [
  "cum",
  "in",
  "me",
  "daddy",
  "mommy",
  "hello",
  "ok",
  "fart",
  "toot",
];

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

  const addChat = (username: string, chat: string) => {
    setActiveChats((oldChats) => [...oldChats, { username, chat }]);
  };

  useEffect(() => {
    clearInterval(savedInterval);

    const interval = setInterval(() => {
      const selectedUser = usernames[getRandomInt(0, usernames.length - 1)];
      const selectedChat = chats[getRandomInt(0, chats.length - 1)];

      addChat(selectedUser, selectedChat);
    }, getRandomInt(250, 1000));

    saveInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800">
      <span className="text-white font-bold text-4xl">Chat</span>

      <div className="flex flex-col overflow-y-scroll max-h-64">
        {activeChats.map((data, index) => (
          <p key={index} className="text-white font-semibold">
            {data.username}: {data.chat}
          </p>
        ))}
      </div>
    </div>
  );
};

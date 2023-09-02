import { useEffect, useRef, useState } from "react";
import SongInput from "./SongInput";

//const chats: number[] = [];

const usernames = ["testUser", "testUser2", "testUser3"];

const chatList = ["foo", "bar", "baz"];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function ChatTest() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentNum, setCurrentNum] = useState<number>(0);
  const [chats, setChats] = useState<{ username: string; chat: string }[]>([]);
  const [userText, setUserText] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);

  const addChat = (username: string, chat: string) => {
    setChats((oldChats) => [...oldChats, { username, chat }]);
    console.log("CHAT ADDED");
  };

  const onPress = () => {
    setButtonPressed(!buttonPressed);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const selectedUser = usernames[getRandomInt(0, usernames.length)];
      const selectedChat = chatList[getRandomInt(0, chatList.length)];

      addChat(selectedUser, selectedChat);
    }, getRandomInt(350, 7000));

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (userText) {
      addChat("MODERATOR", userText);
    }
    if (userText !== "") {
      setUserText("");
    }
  }, [userText]);

  // useEffect(() => {
  //   setChats((oldChats) => [...oldChats, currentNum]);
  // }, [currentNum]);

  useEffect(() => {
    if (!buttonPressed) {
      scrollRef.current?.scrollIntoView({ block: "end" });
    }
  }, [chats]);

  return (
    <>
      <div className="flex justify-center bg-green-600" style={{ width: 300 }}>
        {" "}
        Live Chat
      </div>
      <div
        style={{
          overflowY: "scroll",
          height: 400,
          width: 300,
          display: "flex",
          flexDirection: "column",
        }}
        className="border-2 border-green-600 ambient-background-light"
      >
        {chats.map((chat, index) => (
          <span key={index}>
            {chat.username === "MODERATOR" ? (
              <span className="text-green-600"> MODERATOR 🔧</span>
            ) : (
              chat.username
            )}
            : {chat.chat}
          </span>
        ))}
        <div ref={scrollRef}></div>
      </div>
      <div
        className="border-2 border-green-600 ambient-background-light"
        style={{ width: 300, borderTop: 0 }}
      >
        <SongInput
          setText={setUserText}
          buttonName={"Send"}
          desc={"Send a chat message"}
        />
        <button
          className={`rounded-full p-3 ${
            buttonPressed
              ? "bg-green-600 text-white"
              : "bg-green-300 text-gray-700"
          }`}
          onClick={onPress}
        >
          {" "}
          Autoscroll Off{" "}
        </button>
      </div>
    </>
  );
}

export default ChatTest;

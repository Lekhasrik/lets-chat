import { useState, useEffect, useRef } from "react";
import { getMessagesOfChatRoom, sendMessage } from "../../services/ChatService";

import Message from "./Message";
import Contact from "./Contact";
import ChatForm from "./ChatForm";
import { WelcomeSVG } from "./WelcomeSVG"; // ✅ correct import

export default function ChatRoom({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  const scrollRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMessagesOfChatRoom(currentChat._id);
      setMessages(res);
    };
    fetchData();
  }, [currentChat._id]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.current?.on("getMessage", (data) => {
      setIncomingMessage({
        senderId: data.senderId,
        message: data.message,
      });
    });
  }, [socket]);

  useEffect(() => {
    incomingMessage && setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage]);

  const handleFormSubmit = async (message) => {
    const receiverId = currentChat.members.find(
      (m) => m !== currentUser.uid
    );

    socket.current.emit("sendMessage", {
      senderId: currentUser.uid,
      receiverId,
      message,
    });

    const res = await sendMessage({
      chatRoomId: currentChat._id,
      sender: currentUser.uid,
      message,
    });

    setMessages((prev) => [...prev, res]);
  };

  return (
    <div className="lg:col-span-2 lg:block">
      <div className="w-full">

        <div className="p-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <Contact chatRoom={currentChat} currentUser={currentUser} />
        </div>

        <div className="relative w-full h-[30rem] bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-center">
          {messages.length === 0 ? (
            <WelcomeSVG />
          ) : (
            <div className="p-6 overflow-y-auto h-full w-full">
              <ul className="space-y-2">
                {messages.map((msg, i) => (
                  <div key={i} ref={scrollRef}>
                    <Message message={msg} self={currentUser.uid} />
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>

        <ChatForm handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

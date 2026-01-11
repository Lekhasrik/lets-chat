import { useState, useEffect, useRef } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import Picker from "emoji-picker-react";

export default function ChatForm(props) {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [showEmojiPicker]);

  const handleEmojiClick = (event, emojiObject) => {
    let newMessage = message + emojiObject.emoji;
    setMessage(newMessage);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    props.handleFormSubmit(message);
    setMessage("");
  };

  return (
    <div ref={scrollRef}>
      {showEmojiPicker && (
        <Picker className="dark:bg-gray-900" onEmojiClick={handleEmojiClick} />
      )}
      <form onSubmit={handleFormSubmit}>
        {/* <div className="flex items-center justify-between w-full p-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowEmojiPicker(!showEmojiPicker);
            }}
          >
            <EmojiHappyIcon
              className="h-7 w-7 text-blue-600 dark:text-blue-500"
              aria-hidden="true"
            />
          </button>

          <input
            type="text"
            placeholder="Write a message"
            className="block w-full py-2 pl-4 mx-3 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">
            <PaperAirplaneIcon
              className="h-6 w-6 text-blue-600 dark:text-blue-500 rotate-[90deg]"
              aria-hidden="true"
            />
          </button>
        </div> */}

        <div className="flex items-center gap-2 p-4 bg-white dark:bg-slate-900 border-t">
  <button onClick={(e) => { e.preventDefault(); setShowEmojiPicker(!showEmojiPicker); }}>
    <EmojiHappyIcon className="h-6 w-6 text-blue-600" />
  </button>

  <input
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Type a message..."
    className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 outline-none"
  />

  <button type="submit" className="bg-blue-600 p-3 rounded-full">
    <PaperAirplaneIcon className="h-5 w-5 text-white rotate-90" />
  </button>
</div>

      </form>
    </div>
  );
}

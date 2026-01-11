// import { useState, useEffect } from "react";
// import { createChatRoom } from "../../services/ChatService";
// import Contact from "./Contact";
// import UserLayout from "../layouts/UserLayout";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function AllUsers({
//   users = [],
//   chatRooms = [],
//   setChatRooms,
//   onlineUsersId = [],
//   currentUser,
//   changeChat,
// }) {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [nonContacts, setNonContacts] = useState([]);
//   const [contactIds, setContactIds] = useState([]);

//   // ✅ get contact user ids
//   useEffect(() => {
//     if (!chatRooms.length || !currentUser?.uid) return;

//     const ids = chatRooms
//       .map((chatRoom) =>
//         chatRoom.members?.find(
//           (member) => member !== currentUser.uid
//         )
//       )
//       .filter(Boolean);

//     setContactIds(ids);
//   }, [chatRooms, currentUser?.uid]);

//   // ✅ filter non-contact users
//   useEffect(() => {
//     if (!users.length || !currentUser?.uid) return;

//     const filtered = users.filter(
//       (u) =>
//         u.uid !== currentUser.uid &&
//         !contactIds.includes(u.uid)
//     );

//     setNonContacts(filtered);
//   }, [users, contactIds, currentUser?.uid]);

//   const changeCurrentChat = (index, chat) => {
//     setSelectedChat(index);
//     changeChat(chat);
//   };

//   const handleNewChatRoom = async (user) => {
//     const members = {
//       senderId: currentUser.uid,
//       receiverId: user.uid,
//     };

//     const res = await createChatRoom(members);
//     setChatRooms((prev) => [...prev, res]);
//     changeChat(res);
//   };

//   return (
//     <ul className="overflow-auto h-[30rem]">
//       <h2 className="my-2 ml-2 text-gray-900 dark:text-white">Chats</h2>

//       {chatRooms.map((chatRoom, index) => (
//         <div
//           key={chatRoom._id || index}
//           className={classNames(
//             index === selectedChat
//               ? "bg-gray-100 dark:bg-gray-700"
//               : "bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700",
//             "flex items-center px-3 py-2 text-sm cursor-pointer border-b"
//           )}
//           onClick={() => changeCurrentChat(index, chatRoom)}
//         >
//           <Contact
//             chatRoom={chatRoom}
//             onlineUsersId={onlineUsersId}
//             currentUser={currentUser}
//           />
//         </div>
//       ))}

//       <h2 className="my-2 ml-2 text-gray-900 dark:text-white">
//         Other Users
//       </h2>

//       {nonContacts.map((user) => (
//         <div
//           key={user.uid}
//           className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
//           onClick={() => handleNewChatRoom(user)}
//         >
//           <UserLayout user={user} onlineUsersId={onlineUsersId} />
//         </div>
//       ))}
//     </ul>
//   );
// }

import { useState, useEffect } from "react";
import { createChatRoom } from "../../services/ChatService";
import Contact from "./Contact";
import UserLayout from "../layouts/UserLayout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllUsers({
  users = [],
  chatRooms = [],
  setChatRooms,
  onlineUsersId = [],
  currentUser,
  changeChat,
}) {
  const [selectedChat, setSelectedChat] = useState(null);
  const [nonContacts, setNonContacts] = useState([]);
  const [contactIds, setContactIds] = useState([]);

  // ✅ get contact user ids
  useEffect(() => {
    if (!chatRooms.length || !currentUser?.uid) return;

    const ids = chatRooms
      .map((chatRoom) =>
        chatRoom.members?.find(
          (member) => member !== currentUser.uid
        )
      )
      .filter(Boolean);

    setContactIds(ids);
  }, [chatRooms, currentUser?.uid]);

  // ✅ filter non-contact users
  useEffect(() => {
    if (!users.length || !currentUser?.uid) return;

    const filtered = users.filter(
      (u) =>
        u.uid !== currentUser.uid &&
        !contactIds.includes(u.uid)
    );

    setNonContacts(filtered);
  }, [users, contactIds, currentUser?.uid]);

  const changeCurrentChat = (index, chat) => {
    setSelectedChat(index);
    changeChat(chat);
  };

  const handleNewChatRoom = async (user) => {
    const members = {
      senderId: currentUser.uid,
      receiverId: user.uid,
    };

    const res = await createChatRoom(members);
    setChatRooms((prev) => [...prev, res]);
    changeChat(res);
  };

  return (
    <ul className="overflow-auto h-[30rem] scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-slate-700">
      
      {/* 🔵 Chats */}
      <h2 className="my-3 ml-3 text-sm font-semibold text-blue-700 dark:text-blue-400">
        Chats
      </h2>

      {chatRooms.map((chatRoom, index) => (
        <div
          key={chatRoom._id || index}
          className={classNames(
            index === selectedChat
              ? "bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600"
              : "bg-white hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-slate-700",
            "flex items-center px-4 py-3 cursor-pointer transition-all duration-200 border-b"
          )}
          onClick={() => changeCurrentChat(index, chatRoom)}
        >
          <Contact
            chatRoom={chatRoom}
            onlineUsersId={onlineUsersId}
            currentUser={currentUser}
          />
        </div>
      ))}

      {/* 🔵 Other Users */}
      <h2 className="my-3 ml-3 text-sm font-semibold text-blue-700 dark:text-blue-400">
        Other Users
      </h2>

      {nonContacts.map((user) => (
        <div
          key={user.uid}
          className="flex items-center px-4 py-3 text-sm cursor-pointer
                     hover:bg-blue-50 dark:hover:bg-slate-700
                     transition-all duration-200 border-b"
          onClick={() => handleNewChatRoom(user)}
        >
          <UserLayout user={user} onlineUsersId={onlineUsersId} />
        </div>
      ))}
    </ul>
  );
}


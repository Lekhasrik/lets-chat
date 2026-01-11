// import { useState, useEffect } from "react";

// import { getUser } from "../../services/ChatService";
// import UserLayout from "../layouts/UserLayout";

// export default function Contact({ chatRoom, onlineUsersId, currentUser }) {
//   const [contact, setContact] = useState();

//   useEffect(() => {
//     const contactId = chatRoom.members?.find(
//       (member) => member !== currentUser.uid
//     );

//     const fetchData = async () => {
//       const res = await getUser(contactId);
//       setContact(res);
//     };

//     fetchData();
//   }, [chatRoom, currentUser]);

//   return <UserLayout user={contact} onlineUsersId={onlineUsersId} />;
// }
// console.log("chatRoom.members:", chatRoom.members);
// console.log("currentUser.uid:", currentUser.uid);

// // export default function Contact({ chatRoom, onlineUsersId, currentUser }) {
// //   const [contact, setContact] = useState(null);

// //   useEffect(() => {
// //     const contactId = chatRoom.members?.find(
// //       (member) => member !== currentUser.uid
// //     );

// //     if (!contactId) return;

// //     const fetchData = async () => {
// //       const res = await getUser(contactId);
// //       setContact(res);
// //     };

// //     fetchData();
// //   }, [chatRoom, currentUser]);

// //   if (!contact) return null;

// //   return <UserLayout user={contact} onlineUsersId={onlineUsersId} />;
// // }

import { useState, useEffect } from "react";
import { getUser } from "../../services/ChatService";
import UserLayout from "../layouts/UserLayout";

export default function Contact({ chatRoom, onlineUsersId, currentUser }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    console.log("chatRoom.members:", chatRoom?.members);
    console.log("currentUser.uid:", currentUser?.uid);

    if (!chatRoom?.members || !currentUser?.uid) return;

    const contactId = chatRoom.members.find(
      (member) => member !== currentUser.uid
    );

    console.log("contactId:", contactId);

    if (!contactId) return;

    const fetchData = async () => {
      try {
        const res = await getUser(contactId);
        setContact(res);
      } catch (err) {
        console.error("getUser error:", err);
      }
    };

    fetchData();
  }, [chatRoom, currentUser]);

  if (!contact) return null;

  return <UserLayout user={contact} onlineUsersId={onlineUsersId} />;
}


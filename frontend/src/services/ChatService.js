// import axios from "axios";
// import auth from "../config/firebase";
// import { io } from "socket.io-client";

// const baseURL = "http://localhost:3001/api";

// // 🔐 Get Firebase token
// const getUserToken = async () => {
//   const user = auth.currentUser;
//   if (!user) return null;
//   return await user.getIdToken();
// };

// // 🔌 Socket connection
// export const initiateSocketConnection = async () => {
//   const token = await getUserToken();
//   if (!token) return null;

//   return io("http://localhost:3001", {
//     auth: { token },
//   });
// };

// // 🧾 Auth header
// const createHeader = async () => {
//   const token = await getUserToken();
//   if (!token) throw new Error("No token");

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   };
// };

// // 👥 Get all users
// export const getAllUsers = async () => {
//   const header = await createHeader();
//   const res = await axios.get(`${baseURL}/user`, header);
//   return res.data;
// };

// // 👤 Get single user
// export const getUser = async (userId) => {
//   const header = await createHeader();
//   const res = await axios.get(`${baseURL}/user/${userId}`, header);
//   return res.data;
// };

// // 💬 Get chat rooms of user
// export const getChatRooms = async (userId) => {
//   const header = await createHeader();
//   const res = await axios.get(`${baseURL}/room/${userId}`, header);
//   return res.data;
// };

// // 💬 Get chat room between two users
// export const getChatRoomOfUsers = async (firstUserId, secondUserId) => {
//   const header = await createHeader();
//   const res = await axios.get(
//     `${baseURL}/room/${firstUserId}/${secondUserId}`,
//     header
//   );
//   return res.data;
// };

// // ➕ Create chat room
// export const createChatRoom = async (members) => {
//   const header = await createHeader();
//   const res = await axios.post(`${baseURL}/room`, members, header);
//   return res.data;
// };

// // 📩 Get messages
// export const getMessagesOfChatRoom = async (chatRoomId) => {
//   const header = await createHeader();
//   const res = await axios.get(`${baseURL}/message/${chatRoomId}`, header);
//   return res.data;
// };

// // ✉️ Send message
// export const sendMessage = async (messageBody) => {
//   const header = await createHeader();
//   const res = await axios.post(`${baseURL}/message`, messageBody, header);
//   return res.data;
// };



import axios from "axios";
import auth from "../config/firebase";
import { io } from "socket.io-client";

const baseURL = "http://localhost:3001/api";

// 🔐 Get Firebase token safely
const getUserToken = async () => {
  try {
    const user = auth.currentUser;
    if (!user) return null;
    return await user.getIdToken();
  } catch (err) {
    console.error("Error getting Firebase token:", err);
    return null;
  }
};

// 🧾 Auth header
const createHeader = async () => {
  const token = await getUserToken();
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  };
};

// 🔌 Socket connection
export const initiateSocketConnection = async () => {
  const token = await getUserToken();
  if (!token) return null;

  return io("http://localhost:3001", {
    auth: { token },
  });
};

// API functions
export const getAllUsers = async () => {
  const header = await createHeader();
  const res = await axios.get(`${baseURL}/user`, header);
  return res.data;
};

export const getUser = async (userId) => {
  const header = await createHeader();
  const res = await axios.get(`${baseURL}/user/${userId}`, header);
  return res.data;
};

export const getChatRooms = async (userId) => {
  const header = await createHeader();
  const res = await axios.get(`${baseURL}/room/${userId}`, header);
  return res.data;
};

export const getChatRoomOfUsers = async (firstUserId, secondUserId) => {
  const header = await createHeader();
  const res = await axios.get(
    `${baseURL}/room/${firstUserId}/${secondUserId}`,
    header
  );
  return res.data;
};

export const createChatRoom = async (members) => {
  const header = await createHeader();
  const res = await axios.post(`${baseURL}/room`, members, header);
  return res.data;
};

export const getMessagesOfChatRoom = async (chatRoomId) => {
  try {
    const header = await createHeader();
    const res = await axios.get(`${baseURL}/message/${chatRoomId}`, header);
    return res.data;
  } catch (err) {
    console.error("Error fetching messages:", err);
    return []; // return empty array instead of crashing
  }
};

export const sendMessage = async (messageBody) => {
  try {
    const header = await createHeader();
    const res = await axios.post(`${baseURL}/message`, messageBody, header);
    return res.data;
  } catch (err) {
    console.error("Error sending message:", err);
    return null;
  }
};


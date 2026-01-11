// import express from "express";

// import {
//   createChatRoom,
//   getChatRoomOfUser,
//   getChatRoomOfUsers,
// } from "../controllers/chatRoom.js";

// const router = express.Router();

// router.post("/", createChatRoom);
// router.get("/:userId", getChatRoomOfUser);
// router.get("/:firstUserId/:secondUserId", getChatRoomOfUsers);

// export default router;

import express from "express";
import {
  createChatRoom,
  getChatRoomOfUser,
  getChatRoomOfUsers,
} from "../controllers/chatRoom.js";
import { VerifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post("/", VerifyToken, createChatRoom);
router.get("/:userId", VerifyToken, getChatRoomOfUser);
router.get("/:firstUserId/:secondUserId", VerifyToken, getChatRoomOfUsers);

export default router;


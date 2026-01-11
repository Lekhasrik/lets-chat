// import express from "express";

// import { createMessage, getMessages } from "../controllers/chatMessage.js";

// const router = express.Router();

// router.post("/", createMessage);
// router.get("/:chatRoomId", getMessages);

// export default router;


import express from "express";
import { createMessage, getMessages } from "../controllers/chatMessage.js";
import { VerifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post("/", VerifyToken, createMessage);
router.get("/:chatRoomId", VerifyToken, getMessages);

export default router;

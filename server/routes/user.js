// import express from "express";

// import { getAllUsers, getUser } from "../controllers/user.js";

// const router = express.Router();

// router.get("/", getAllUsers);
// router.get("/:userId", getUser);

// export default router;

import express from "express";
import { getAllUsers, getUser } from "../controllers/user.js";
import { VerifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.get("/", VerifyToken, getAllUsers);
router.get("/:userId", VerifyToken, getUser);

// Update user profile
router.put("/:userId", VerifyToken, async (req, res) => {
  try {
    const { name, phone, about } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { name, phone, about },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

export default router;

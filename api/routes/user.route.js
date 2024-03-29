import express from "express";
import {
  deleteUser,
  getuser,
  getusers,
  signout,
  test,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:deleteId", verifyToken, deleteUser);
router.post("/sign-out", signout);
router.get("/getusers", verifyToken, getusers);
router.get("/:getuserId", getuser);

export default router;

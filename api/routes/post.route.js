import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletepost,
  getPosts,
  updatepost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userPostId", verifyToken, deletepost);
router.put("/updatepost/:updatePostId/:updateUserId", verifyToken, updatepost);

export default router;

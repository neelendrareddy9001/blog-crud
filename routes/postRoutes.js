import { Router } from "express";
import {
  createPost,
  deletePost,
  fetchPosts,
  singlePost,
  updatePost,
} from "../controller/postController.js";

const router = Router();

router.post("/create", createPost);
router.put("/update/:id", updatePost);
router.get("/getAll", fetchPosts);
router.get("/get/:id", singlePost);
router.delete("/delete/:id", deletePost);

export default router;

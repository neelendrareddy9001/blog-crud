import { Router } from "express";
import {
  createComm,
  deleteComm,
  fetchComments,
  singleComm,
  updateComm,
} from "../controller/comController.js";

const router = Router();

router.post("/create", createComm);
router.put("/update/:id", updateComm);
router.get("/getAll", fetchComments);
router.get("/get/:id", singleComm);
router.delete("/delete/:id", deleteComm);

export default router;

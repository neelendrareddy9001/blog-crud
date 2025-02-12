import { Router } from "express";
import {
  createUser,
  fetchUsers,
  singleUser,
  updateUser,
} from "../controller/userController.js";

const router = Router();

router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/getAll", fetchUsers);
router.get("/get/:id", singleUser);

export default router;

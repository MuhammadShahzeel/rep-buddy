import express from "express";
import { loginUSer, signupUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", loginUSer);
router.post("/signup", signupUser);

export default router;

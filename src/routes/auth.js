// routes/auth.js
import express from "express";
import { register, login } from "../controllers/authController.js";
import { validateUser } from "../middlewares/validateUser.js";

const authRouter = express.Router();

authRouter.post("/register", validateUser, register);
authRouter.post("/login", login);

export default authRouter;

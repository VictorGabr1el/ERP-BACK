// routes/users.js
import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { validateUser } from "../middlewares/validateUser.js";

const userRouter = express.Router();

userRouter.post("/", validateUser, createUser); // Rota para criar usuário
userRouter.get("/", getUsers); // Rota para obter todos os usuários
userRouter.get("/:id", getUserById); // Rota para obter um usuário específico
userRouter.put("/:id", validateUser, updateUser); // Rota para atualizar um usuário
userRouter.delete("/:id", deleteUser); // Rota para deletar um usuário

export default userRouter;

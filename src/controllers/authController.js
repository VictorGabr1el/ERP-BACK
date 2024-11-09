// controllers/authController.js
import { createUser } from "./userController.js";
import User from "../models/User.js"; // Certifique-se de importar User aqui
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { validationResult } from "express-validator";

dotenv.config();

const secretKey = "process.env.SECRET_KEY";
console.log(secretKey);

export const register = [
  // Middleware validateUser aplicado para validação
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = await createUser(req.body);

      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
];

export const login = [
  // Validações
  async (req, res) => {
    try {
      const { name, password } = req.body;
      const user = await User.findOne({ where: { name } });
      if (!user) return res.status(404).json({ message: "User not found" });

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid)
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
];

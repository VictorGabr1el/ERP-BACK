// controllers/authController.js
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";

dotenv.config();

const secretKey = "process.env.SECRET_KEY";

export const register = [
  body("name").isString().withMessage("Name must be a string"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, password: hashedPassword });
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
];

export const login = [
  body("name").isString().withMessage("Name must be a string"),
  body("password").isString().withMessage("Password is required"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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

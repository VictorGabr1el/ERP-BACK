// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = "process.env.SECRET_KEY";
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extrai o token
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

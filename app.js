// app.js
import express from "express";
import acertosRouter from "./src/routes/settlements.js";
import morgan from "morgan";
import authRouter from "./src/routes/auth.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import userRouter from "./src/routes/user.js";

const app = express();
app.use(express.json());

app.use("/settlements", acertosRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.use(morgan("combined"));
app.use(errorHandler);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3000");
});

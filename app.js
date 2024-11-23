// app.js
import express from "express";
import acertosRouter from "./src/routes/settlements.js";
import morgan from "morgan";
import authRouter from "./src/routes/auth.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import userRouter from "./src/routes/user.js";
import agreementsInstallmentsRouter from "./src/routes/agreementsInstallments.js";
import settementRouter from "./src/routes/settlements.js";
import agreementRouter from "./src/routes/Agreements.js";
import agreementsNegotiationRouter from "./src/routes/agreementsNegotiation.js";
import settlementsInstallmentsRouter from "./src/routes/settlementsInstallments.js";
import settlementsNegotiationsRouter from "./src/routes/settlementsNegotiation.js";
import salesRouter from "./src/routes/salesRoutes.js";
import itemStockRouter from "./src/routes/itemStockRoutes.js";
import inventoryRouter from "./src/routes/inventoryRoutes.js";
import inventoryItemsRouter from "./src/routes/inventoryItemsRoutes.js";
import stockRouter from "./src/routes/stockRouter.js";

const app = express();
app.use(express.json());

app.use("/settlements", acertosRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/agreements", agreementRouter);
app.use("/agreements-installments", agreementsInstallmentsRouter);
app.use("/agreements-negotiations", agreementsNegotiationRouter);
app.use("/settements", settementRouter);
app.use("/settements-installments", settlementsInstallmentsRouter);
app.use("/settements-negotiations", settlementsNegotiationsRouter);
app.use("/sales", salesRouter);
app.use("/item-stock", itemStockRouter);
app.use("/inventory", inventoryRouter);
app.use("/inventory-items", inventoryItemsRouter);
app.use("/validate-discrepancy", inventoryItemsRouter);
app.use("/stock", stockRouter);

app.use(morgan("combined"));
app.use(errorHandler);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3000");
});

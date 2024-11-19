// routes/salesRoutes.js
import express from "express";
import {
  createSale,
  getSales,
  getSaleById,
  updateSale,
  deleteSale,
} from "../controllers/salesController.js";
import salesValidator from "../validators/salesValidator.js";

const salesRouter = express.Router();

salesRouter.route("/").get(getSales).post(salesValidator, createSale);

salesRouter
  .route("/:id")
  .get(getSaleById)
  .put(salesValidator, updateSale)
  .delete(deleteSale);

export default salesRouter;

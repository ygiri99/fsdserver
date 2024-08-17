import express from "express";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./productRoutes.js";

const router = express.Router();

//Product Routers

router.get("/", getProducts);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
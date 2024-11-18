import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
// router.patch() you will use it when you want to update some of the field of existing products
// router.put() you will use it when you want to update all the field of existing products
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

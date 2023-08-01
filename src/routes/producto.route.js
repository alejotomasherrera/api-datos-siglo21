import { Router } from "express";
import {
  getProducto
} from "../controllers/producto.controller";

const router = Router();

router.get("/", getProducto);

export default router;
import { Router } from "express";
import {
  getPedido
} from "../controllers/pedido.controller";

const router = Router();

router.get("/", getPedido);

export default router;
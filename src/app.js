import express from "express";
import cors from "cors";import morgan from "morgan";
import empleadoRoutes from "./routes/empleados.route";
import pedidoRoutes from "./routes/pedido.route";
import productoRoutes from "./routes/producto.route";
import config from "./config";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// configurar ruta empleados
app.use("/api/empleados", empleadoRoutes)
// configurar ruta pedido
app.use("/api/pedido", pedidoRoutes)
// configurar ruta producto
app.use("/api/producto", productoRoutes)


export default app;
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/infrastructure/config/data-base.js";
import envs from "./src/infrastructure/config/environment-vars.js";

// Routers
import userRouter from "./src/infrastructure/routes/UserRoutes.js";
import productoRouter from "./src/infrastructure/routes/ProductoRoutes.js";
import ingresoRouter from "./src/infrastructure/routes/IngresosRoutes.js";
import gastoRouter from "./src/infrastructure/routes/GastosRoutes.js";
import costoRouter from "./src/infrastructure/routes/CostosRoutes.js";
import compraRouter from "./src/infrastructure/routes/ComprasRoutes.js";
import cors from "cors";

dotenv.config();
//middlewares
const app = express();
app.use(cors({
  origin: "http://localhost:4200", // tu frontend Angular en dev
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/usuarios", userRouter);
app.use("/api/productos", productoRouter);
app.use("/api/ingresos", ingresoRouter);
app.use("/api/gastos", gastoRouter);
app.use("/api/costos", costoRouter);
app.use("/api/compras", compraRouter);

// Start server
connectDB().then(() => {
  const port = envs.PORT || 4000;
  app.listen(port, () => {
    console.log(`Backend escuchando en http://localhost:${port}`);
  });
});

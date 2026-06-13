
import { Router,Request, Response } from "express";
import { CompraAdapter } from "../adapter/comprasAdapter.js";
import { CompraApplication } from "../../app/comprasApplication.js";
import { CompraController } from "../controller/comprasController.js";

const compraRouter = Router();

// inicialización de las capas
const compraAdapter = new CompraAdapter();
const compraApp = new CompraApplication(compraAdapter);
const compraController = new CompraController(compraApp);

// definición de rutas
compraRouter.post("/compras", async (req: Request, res: Response) => {
  try {
    await compraController.createCompra(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error en la creación de Compra", error });
  }
});

compraRouter.put("/Compra/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    await compraController.updateCompra(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error en la actualización de Compra", error });
  }
});

compraRouter.delete("/compras/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    await compraController.deleteCompra(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error al borrar Compra por id", error });
  }
});

compraRouter.get("/compras/id/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    await compraController.getCompraById(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error en la consulta por id", error });
  }
});

compraRouter.get("/compras", async (req: Request, res: Response) => {
  try {
    await compraController.getCompraAllCompra(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error en la consulta de datos", error });
  }
});

export default compraRouter;

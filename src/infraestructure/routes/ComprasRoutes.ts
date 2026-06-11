import { Router } from 'express';
import { CompraAdapter } from '../adapter/comprasAdapter';
import { CompraApplication } from '../../app/comprasApplication';
import { CompraController } from '../controller/comprasController';

const compraRouter = Router();
//inicializacion de las capas
const compraAdapter = new CompraAdapter();
const compraApp = new CompraApplication(compraAdapter);
const compraController = new CompraController(compraApp);
//definicion de rutas
compraRouter.post('/compras', async (req, res) => {
  try {
    await compraController.createCompra(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la creación de Compra', error });
  }
});
compraRouter.put('/Compra/:id', async (req, res) => {
  try {
    await compraController.updateCompra(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la cactualización del Compra', error });
  }
});
compraRouter.delete('/compras/:id', async (req, res) => {
  try {
    await compraController.deleteCompra(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar Compra por id', error });
  }
});
//se hace el CompraRouter para el get de los emails y como se requierede consultar y se tiene un indice que es el email se pone de la siguiente manera
compraRouter.get('/compras/id/:id', async (req, res) => {
  try {
    await compraController.getCompraById(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la consulta por id', error });
  }
});

compraRouter.get('/compras', async (req, res) => {
  try {
    await compraController.getCompraAllCompra(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la consulta de datos', error });
  }
});
export default compraRouter;

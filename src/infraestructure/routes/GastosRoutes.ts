import { Router } from 'express';
import { GastoAdapter } from '../adapter/gastosAdapter';
import { GastoApplication } from '../../app/gastosApplication';
import { GastoController } from '../controller/gastosController';

const gastoRouter = Router();
//inicializacion de las capas
const gastoAdapter = new GastoAdapter();
const gastoApp = new GastoApplication(gastoAdapter);
const gastoController = new GastoController(gastoApp);
//definicion de rutas
gastoRouter.post('/gastos', async (req, res) => {
  try {
    await gastoController.createGasto(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la creación de Gasto', error });
  }
});
gastoRouter.put('/Gasto/:id', async (req, res) => {
  try {
    await gastoController.updateGasto(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la cactualización del Gasto', error });
  }
});
gastoRouter.delete('/gastos/:id', async (req, res) => {
  try {
    await gastoController.deleteGasto(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar Gasto por id', error });
  }
});
//se hace el GastoRouter para el get de los emails y como se requierede consultar y se tiene un indice que es el email se pone de la siguiente manera
gastoRouter.get('/gastos/id/:id', async (req, res) => {
  try {
    await gastoController.getGastoById(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la consulta por id', error });
  }
});

gastoRouter.get('/gastos', async (req, res) => {
  try {
    await gastoController.getGastoAllGasto(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la consulta de datos', error });
  }
});
export default gastoRouter;

import { Router } from 'express';
import { CostoAdapter } from '../adapter/costosAdapter';
import { CostoApplication } from '../../app/costosApplication';
import { CostoController } from '../controller/costosController';

const costoRouter = Router();
//inicializacion de las capas
const costoAdapter = new CostoAdapter();
const costoApp = new CostoApplication(costoAdapter);
const costoController = new CostoController(costoApp);
//definicion de rutas
costoRouter.post('/costos', async (req, res) => {
  try {
    await costoController.createCosto(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la creación de Costo', error });
  }
});
costoRouter.put('/Costo/:id', async (req, res) => {
  try {
    await costoController.updateCosto(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la cactualización del Costo', error });
  }
});
costoRouter.delete('/costos/:id', async (req, res) => {
  try {
    await costoController.deleteCosto(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar Costo por id', error });
  }
});
//se hace el CostoRouter para el get de los emails y como se requierede consultar y se tiene un indice que es el email se pone de la siguiente manera
costoRouter.get('/costos/id/:id', async (req, res) => {
  try {
    await costoController.getCostoById(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la consulta por id', error });
  }
});

costoRouter.get('/costos', async (req, res) => {
  try {
    await costoController.getCostoAllCosto(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error en la consulta de datos', error });
  }
});
export default costoRouter;

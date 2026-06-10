import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import 'dotenv/config'; // carga automáticamente las variables de .env
import express from 'express';
import { join } from 'node:path';
import { connectDB, AppDataSource} from './infraestructure/config/data-base';
import envs from "./infraestructure/config/environment-vars";
import { User } from './infraestructure/entities/user';
import { Producto } from './infraestructure/entities/producto';
import { Ingresos } from './infraestructure/entities/ingresos';
import { Gastos } from './infraestructure/entities/gastos';
import { Costos } from './infraestructure/entities/costos';
import { Compras } from './infraestructure/entities/compras';
const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());//se usa para hacer de interprete json

//endpoints de carga de datos
//obtener todos los usuarios
app.get("/api/usuarios", async(req, res)=>{
  try {
    const userRepo= AppDataSource.getRepository(User);
    const usuarios= await userRepo.find();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"error consultando usuarios"});
  }
});
// Crear un nuevo usuario
app.post("/api/usuarios", async (req, res) => {
  try {
    const userRepo = AppDataSource.getRepository(User);
    const nuevoUsuario = userRepo.create(req.body);
    const resultado = await userRepo.save(nuevoUsuario);
    res.status(201).json(resultado);
  } catch (err) {
    console.error("Error creando usuario:", err);
    res.status(500).json({ error: "Error creando usuario" });
  }
});
//traer todos los productos
app.get("/api/productos", async(req, res)=>{
  try {
    const prodRepo= AppDataSource.getRepository(Producto);
    const productos= await prodRepo.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"error consultando productos"});
  }
});
// Crear un nuevo producto
app.post("/api/productos", async (req, res) => {
  try {
    const prodRepo = AppDataSource.getRepository(Producto);
    const nuevoProducto = prodRepo.create(req.body);
    const resultado = await prodRepo.save(nuevoProducto);
    res.status(201).json(resultado);
  } catch (err) {
    console.error("Error creando usuario:", err);
    res.status(500).json({ error: "Error creando Producto" });
  }
});
//traer todos los ingresos
app.get("/api/ingresos", async(req, res)=>{
  try {
    const ingRepo= AppDataSource.getRepository(Ingresos);
    const ingresos= await ingRepo.find();
    res.json(ingresos);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"error consultando ingresos"});
  }
});
// Crear un nuevo ingreso
app.post("/api/ingresos", async (req, res) => {
  try {
    const ingRepo = AppDataSource.getRepository(Ingresos);
    const nuevoIngreso = ingRepo.create(req.body);
    const resultado = await ingRepo.save(nuevoIngreso);
    res.status(201).json(resultado);
  } catch (err) {
    console.error("Error creando usuario:", err);
    res.status(500).json({ error: "Error creando ingreso" });
  }
});
app.get("/api/gastos", async(req, res)=>{
  try {
    const gasRepo= AppDataSource.getRepository(Gastos);
    const gastos= await gasRepo.find();
    res.json(gastos);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"error consultando gastos"});
  }
});
// Crear un nuevo producto
app.post("/api/gastos", async (req, res) => {
  try {
    const gasRepo = AppDataSource.getRepository(Gastos);
    const nuevoGasto = gasRepo.create(req.body);
    const resultado = await gasRepo.save(nuevoGasto);
    res.status(201).json(resultado);
  } catch (err) {
    console.error("Error creando usuario:", err);
    res.status(500).json({ error: "Error creando gasto" });
  }
});
app.get("/api/costos", async(req, res)=>{
  try {
    const cosRepo= AppDataSource.getRepository(Costos);
    const costos= await cosRepo.find();
    res.json(costos);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"error consultando costos"});
  }
});
// Crear un nuevo producto
app.post("/api/costos", async (req, res) => {
  try {
    const cosRepo = AppDataSource.getRepository(Costos);
    const nuevoCosto = cosRepo.create(req.body);
    const resultado = await cosRepo.save(nuevoCosto);
    res.status(201).json(resultado);
  } catch (err) {
    console.error("Error creando usuario:", err);
    res.status(500).json({ error: "Error creando costo" });
  }
});
//traer todos los productos
app.get("/api/compras", async(req, res)=>{
  try {
    const comRepo= AppDataSource.getRepository(Compras);
    const compras= await comRepo.find();
    res.json(compras);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"error consultando compras"});
  }
});
// Crear un nuevo producto
app.post("/api/compras", async (req, res) => {
  try {
    const comRepo = AppDataSource.getRepository(Compras);
    const nuevaCompra = comRepo.create(req.body);
    const resultado = await comRepo.save(nuevaCompra);
    res.status(201).json(resultado);
  } catch (err) {
    console.error("Error creando usuario:", err);
    res.status(500).json({ error: "Error creando compra" });
  }
});
/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * El puerto se toma de .env (PORT) o se usa 4000 por defecto.
 */

if (isMainModule(import.meta.url) || process.env['pm_id']) {
  //Se conecta la base de datos apenas se inicia el server
  connectDB().then(() => {
    const port = envs.PORT;
    app.listen(port, (error) => {
      if (error) {
        throw error;
      }
      console.log(`Node Express server listening on http://localhost:${port}`);
    });
  })
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);

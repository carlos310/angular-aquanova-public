import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import 'dotenv/config'; // carga automáticamente las variables de .env
import express from 'express';
import { join } from 'node:path';
import { connectDB } from './infraestructure/config/data-base';
import envs from "./infraestructure/config/environment-vars";

// Importa tus routers ya definidos en carpetas individuales
import userRouter from "./infraestructure/routes/UserRoutes";
import productoRouter from "./infraestructure/routes/ProductoRoutes";
import ingresoRouter from "./infraestructure/routes/IngresosRoutes";
import gastoRouter from "./infraestructure/routes/GastosRoutes";
import costoRouter from "./infraestructure/routes/CostosRoutes";
import compraRouter from "./infraestructure/routes/ComprasRoutes";

const browserDistFolder = join(import.meta.dirname, '../browser');
const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Middlewares globales
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Rutas API (montadas desde tus archivos individuales)
 */
app.use("/api/usuarios", userRouter);
app.use("/api/productos", productoRouter);
app.use("/api/ingresos", ingresoRouter);
app.use("/api/gastos", gastoRouter);
app.use("/api/costos", costoRouter);
app.use("/api/compras", compraRouter);

/**
 * Archivos estáticos de Angular
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * SSR de Angular: cualquier request que no sea API ni estático
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
 * Inicio del servidor
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  connectDB().then(() => {
    // PORT se toma de environment-vars.ts, que a su vez usa process.env.PORT
    const port = envs.PORT || 4000;
    app.listen(port, (error) => {
      if (error) throw error;
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  });
}

export const reqHandler = createNodeRequestHandler(app);


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

/**
 * Handle all other requests by rendering the Angular application.
 */


/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * El puerto se toma de .env (PORT) o se usa 4000 por defecto.
 */





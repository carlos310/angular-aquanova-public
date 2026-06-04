import express from 'express';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CommonEngine } from '@angular/ssr';

const app = express();

// Carpeta donde está el build del navegador
const browserDistFolder = join(fileURLToPath(import.meta.url), '../browser');

// Instancia del motor SSR con CommonEngine
const angularApp = new CommonEngine();

// Servir archivos estáticos desde /browser
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// Manejar todas las demás peticiones renderizando Angular
app.get('*', async (req, res, next) => {
  try {
    const response = await angularApp.render({
      url: req.originalUrl,
      documentFilePath: join(browserDistFolder, 'index.html'),
    });

    res.status(200).send(response.html);
  } catch (error) {
    next(error);
  }
});

// Iniciar servidor
const port = process.env['PORT'] || 4000;
app.listen(port, (error?: Error) => {
  if (error) {
    throw error;
  }
  console.log(`Node Express server listening on http://localhost:${port}`);
});

import express from 'express';
import { join } from 'node:path';
import { CommonEngine } from '@angular/ssr';
import { fileURLToPath } from 'node:url';

const app = express();

// Carpeta donde está el build del navegador
const browserDistFolder = join(fileURLToPath(import.meta.url), '../browser');

// Instancia del motor SSR
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

    if (response) {
      res.status(200).send(response.html);
    } else {
      next();
    }
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

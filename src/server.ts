
import { createNodeRequestHandler } from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const app = express();
const PORT = process.env['PORT'] || 4000;

// Carpeta de salida del build Angular
const distFolder = join(process.cwd(), 'dist/aquanova/browser');

// Ejemplo de endpoint REST propio
app.get('/usuarios', (req, res) => {
  const email = req.query['email'] as string;
  res.json({ message: `Usuario con email ${email}` });
});

// Importa el módulo del servidor compilado
const serverModule = require(join(process.cwd(), 'dist/aquanova/server/main.server.js'));

// Middleware para servir Angular con SSR
app.use('*', createNodeRequestHandler(serverModule));

app.listen(PORT, () => {
  console.log(`Servidor SSR corriendo en http://localhost:${PORT}`);
});

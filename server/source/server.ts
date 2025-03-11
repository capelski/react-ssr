import express from 'express';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

const { App } = require('../ssr/app.js');

const app = express();

app.use([/^\/$/, /^\/login\/?$/], async (req, res) => {
  const appWithRouter = createElement(
    StaticRouter,
    { location: req.originalUrl },
    createElement(App),
  );
  const appHtml = renderToString(appWithRouter);
  const indexHtml = await readFile(resolve(__dirname, '..', 'static', 'index.html'), 'utf-8');

  const html = indexHtml.replace(
    '<div id="app-placeholder"></div>',
    `<div id="app-placeholder">${appHtml}</div>`,
  );

  res.send(html);
});

app.use(express.static('static'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

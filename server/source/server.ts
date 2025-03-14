import express from 'express';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

const { App } = require('../ssr/app.js');

const app = express();

const getUserNames = async () => {
  // Asynchronous method that would retrieve user names from the database.
  // For the sake of simplicity, mocking the implementation
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return ['Barney Stinson', 'Lily Aldrin', 'Marshall Eriksen', 'Robin Scherbatsky', 'Ted Mosby'];
};

app.get('/api/user-names', async (_req, res) => {
  const userNames = await getUserNames();
  res.json(userNames);
});

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

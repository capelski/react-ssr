# React server rendering on a Typescript express server

## Set up

```sh
cd client
npm ci
npm run build
npm run build:ssr
cd ../

cd server
npm ci
npm run dev
```

## Incremental implementation through branches

1. [Starting point](https://github.com/capelski/react-ssr/tree/starting-point). Sample Typescript stack composed of a trivial React app and a static express server.

2. [Basic SSR](https://github.com/capelski/react-ssr/tree/basic-ssr). Setting up webpack to generate a Node.js compatible bundle and rendering it on the express server.

3. [Routing](https://github.com/capelski/react-ssr/tree/routing). Adding client side routing and rendering multiple routes on the server side.

4. [Data fetching](https://github.com/capelski/react-ssr/tree/data-fetching). Adding asynchronous data fetching during the React app initialization and providing the data on the server rendering.

5. [Typed SSR](https://github.com/capelski/react-ssr/tree/typed-ssr). Bonus. Generating type declarations for the React app and consuming them from the express server.

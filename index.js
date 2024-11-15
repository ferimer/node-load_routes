'use strict';

// Load routes (object) into express Router

module.exports = (router, routes, base = '', middlewares = []) => {
  Object.keys(routes).forEach(r => {
    router.use(`${base}/${r}`, ...middlewares, routes[r]);
  });
};

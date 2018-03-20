'use strict';

// Load routes (object) into express Router

module.exports = (router, routes, base = '') => {
  Object.keys(routes).forEach(r => {
    router.use(`${base}/${r}`, routes[r]);
  });
};

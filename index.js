'use strict';

// Load routes (object) into express Router

module.exports = (router, routes) => {
  Object.keys(routes).forEach(r => {
    router.use(`/${r}`, routes[r]);
  });
};

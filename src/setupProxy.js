const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    createProxyMiddleware("/event", {
      target: "http://13.125.252.184:8080/",
      changeOrigin: true,
    }),
  );
};

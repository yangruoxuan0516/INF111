const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(cors());
app.use(
  createProxyMiddleware({
    router: (req) => {
      return new URL(req.path.substring(1))
    },
    pathRewrite: (path, req) => {
    const newPath = path.split('/').slice(4).join('/');
    return "/"+newPath;
    },
    changeOrigin: true,
    logger: console,
  })
);

app.listen(8088, () => {
  console.info("proxy server is running on port 8088");
});

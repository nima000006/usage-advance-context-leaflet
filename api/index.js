const { createServer } = require("http");
const { parse } = require("url");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("../db.json"); //This is the line in question.  It's assuming that db.json is in the same location as api/index.js
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const vercelServer = createServer((req, res) => {
  // Handle CORS (for development, not recommended for production)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }

  const parsedUrl = parse(req.url, true);
  req.url = parsedUrl.pathname;

  server(req, res);
});

module.exports = (req, res) => {
  vercelServer.emit("request", req, res);
};

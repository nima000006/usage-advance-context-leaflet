import jsonServer from "json-server";
import path from "./cities.json";

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "cities.json")); // Path to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default server;

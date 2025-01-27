import { createServer } from "json-server";
import cities from "../data/cities.json";

const server = createServer({ watch: false });

server.db.setState({ cities });

export default server;

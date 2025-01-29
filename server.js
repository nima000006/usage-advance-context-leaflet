import { create, router as _router, defaults } from "json-server";
const server = create();
const router = _router("cities.json");
const middlewares = defaults();
const port = process.env.PORT || 5000
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

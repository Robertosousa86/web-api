const http = require("http");
const PORT = 3000;
const DEFAULT_HEADER = { "Content-Type": "application/json" };

const routes = {
  "/heroes:get": async (request, response) => {
    const { id } = request.queryString;

    console.log({ id });
    return response.end();
  },
  default: (request, response) => {
    response.write("HELLO\n");
    response.end();
  },
};

http
  .createServer((request, response) => {
    const { url, method } = request;
    const [first, route, id] = url.split("/");
    // id é um número? se sim retorna ele mesmo se não faz o parse(Number(id))
    request.queryString = { id: isNaN(id) ? id : Number(id) };

    const key = `/${route}:${method.toLowerCase()}`;

    response.writeHead(200, DEFAULT_HEADER);

    const chosen = routes[key] || routes.default;
    return chosen(request, response);

    // response.end();
  })
  .listen(PORT, () => console.log(`Server running on the port: ${PORT}`));

const http = require("http");
const PORT = 3000;

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });

    response.write("Hello, World!");
    response.end();
  })
  .listen(PORT, () => console.log(`Server running on the port: ${PORT}`));

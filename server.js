const http = require("http")

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" })

    if (request.url === "/produto") {
      response.end(
        JSON.stringify({
          message: "rota de produto",
        })
      )
    }
    if (request.url === "/usuario") {
      response.end(
        JSON.stringify({
          message: "rota de usuario",
        })
      )
    }

    response.end(
      JSON.stringify({
        message: "qualquer pag",
      })
    )
  })
  .listen(4001, () => console.log("server rodando na porta 4001"))

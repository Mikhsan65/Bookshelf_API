const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const books = require("./books");
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  console.log("Daftar Buku:");
  books.forEach((book) => {
    console.log(`ID: ${book.id}, Judul: ${book.name}`);
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

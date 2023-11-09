const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      auth: "/auth",
      sales: "/sales",
      shopping: "/shopping",
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/auth.router"));
    this.app.use(this.paths.sales, require("../routes/sales.router"));
    this.app.use(this.paths.shopping, require("../routes/shopping.router"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.clear();
      const date = new Date().toUTCString();
      console.log(`Server running on port ${this.port} ${date}`);
    });
  }
}

module.exports = Server;

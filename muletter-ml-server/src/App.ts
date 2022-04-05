import Express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

class App {
  app: Express.Application;

  constructor() {
    this.app = Express();

    this.SetMW();
    this.SetRoutes();
    this.Start();
  }

  SetMW() {
    this.app.use(morgan("dev"));
  }

  SetRoutes() {}

  Start() {
    const port = process.env.PORT || "80";
    this.app.listen(port, () => {
      console.log(`[Express port number: ${port}] Server Start Success`);
    });
  }
}

export default new App();

import Express from "express";

class MailBoxRouter {
  router: Express.Router;

  constructor() {
    this.router = Express.Router();
    this.SetRoutes();
  }

  SetRoutes() {
    this.router.post("/", (req: Express.Request, res: Express.Response) => {
      return res.status(201).json({
        message: "success",
      });
    });
  }
}

export default new MailBoxRouter().router;

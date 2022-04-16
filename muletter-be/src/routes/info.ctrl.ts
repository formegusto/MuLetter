import Express from "express";
import MailModel from "../models/mail";
import MailBoxModel from "../models/mailBox";

class InfoRouter {
  router: Express.Router;

  constructor() {
    this.router = Express.Router();
    this.SetRoutes();
  }

  SetRoutes() {
    this.router.get(
      "/data",
      async (req: Express.Request, res: Express.Response) => {
        const mailCount = await MailModel.countDocuments();
        const mailBoxCount = await MailBoxModel.countDocuments();

        let randomMail: any = await MailModel.find({});
        randomMail = randomMail[Math.floor(Math.random() * randomMail.length)];

        return res.status(200).json({
          mailCount,
          mailBoxCount,
          randomMail,
        });
      }
    );
  }
}

export default new InfoRouter().router;

import Express from "express";
import multer from "multer";
import path from "path";
import moment from "moment-timezone";
import { MailBox, Track } from "../models/mailBox/types";
import MailBoxModel from "../models/mailBox";

const upload: Express.RequestHandler = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "static");
    },
    filename: (req, file, cb) => {
      cb(null, `mailbox-image-${Date.now()}${path.extname(file.originalname)}`);
    },
  }),
}).single("image");

class MailBoxRouter {
  router: Express.Router;

  constructor() {
    this.router = Express.Router();
    this.SetRoutes();
  }

  SetRoutes() {
    this.router.post(
      "/",
      upload,
      async (req: Express.Request, res: Express.Response) => {
        const imagePath = req.file && req.file.filename;
        let { title, tracks } = req.body;
        tracks = JSON.parse(tracks) as Track;
        const createdAt = moment(new Date()).format("YYYY-MM-DDTHH:mm:ss");

        const _mailBox: MailBox = {
          title,
          tracks,
          imagePath,
          createdAt,
          updatedAt: createdAt,
        };
        const mailBox = await MailBoxModel.create(_mailBox);

        return res.status(201).json({
          mailBox,
        });
      }
    );
  }
}

export default new MailBoxRouter().router;

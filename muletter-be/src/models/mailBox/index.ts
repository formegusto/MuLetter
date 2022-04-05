import { model, Schema, Types } from "mongoose";
import { Coord, MailBox, Track } from "./types";

const coordSchema = new Schema<Coord>({});
const trackSchema = new Schema<Track>({});

const schema = new Schema<any>(
  {
    title: { type: String, required: true },
    tracks: [trackSchema],
    coord: coordSchema,
  },
  {
    collection: "MailBox",
  }
);

const MailBoxModel = model<MailBox>("MailBox", schema);
export default MailBoxModel;

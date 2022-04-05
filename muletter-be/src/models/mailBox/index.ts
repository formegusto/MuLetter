import { model, Schema } from "mongoose";
import { Coord, MailBox, Track } from "./types";

const coordSchema = new Schema<Coord>({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
});
const trackSchema = new Schema<Track>({
  track_id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
});

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

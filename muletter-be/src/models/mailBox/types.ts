import { Document, Types } from "mongoose";

export interface Track {
  track_id: string;
  name: string;
  artists: string;
  artist_name: string;
  image: string;
}

export type Coord = {
  x: number;
  y: number;
};

export type MailBox = {
  title: string;
  tracks: Track[];
  coord?: Coord;
};

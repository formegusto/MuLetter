import createActionTypes from "../../utils/createActionTypes";

// Redux Action Types
export const [GET_MAILBOXES, GET_MAILBOXES_SUCCESS, GET_MAILBOXES_FAILURE] =
  createActionTypes("mailbox/get_mailboxes");

// Store Types
export type Track = {
  trackId: string;
  trackName: string;
  artistIds: string;
  artistNames: string;
  image: string;
};

export type Coord = {
  x: number;
  y: number;
};

export type MailBox = {
  _id: string;
  title: string;
  imagePath?: string;
  tracks: Track[];
  coord?: Coord;
  createdAt: string;
  updatedAt: string;
};

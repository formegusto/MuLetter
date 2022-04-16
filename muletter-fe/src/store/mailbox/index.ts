import { handleActions } from "redux-actions";
import { GET_MAILBOXES_SUCCESS, MailBox } from "./types";

type MailBoxStore = {
  mailBoxes: MailBox[] | null;
};

const mailBoxStore: MailBoxStore = {
  mailBoxes: null,
};

const MailBoxReducer = handleActions<MailBoxStore, any>(
  {
    [GET_MAILBOXES_SUCCESS]: (state, action) => ({
      ...state,
      mailBoxes: action.payload.mailBox,
    }),
  },
  mailBoxStore
);
export default MailBoxReducer;

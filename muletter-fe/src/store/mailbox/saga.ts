import { takeLatest } from "redux-saga/effects";
import api from "../../api";
import createRequestSaga from "../../utils/createRequestSaga";
import { GET_MAILBOXES } from "./types";

const getMailBoxesSaga = createRequestSaga(
  GET_MAILBOXES,
  api["mailbox"].getMailBoxes
);

export default function* mailBoxSaga() {
  yield takeLatest(GET_MAILBOXES, getMailBoxesSaga);
}

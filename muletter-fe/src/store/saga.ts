import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import infoSaga from "./info/saga";

export default function* RootSaga() {
  yield all([authSaga(), infoSaga()]);
}

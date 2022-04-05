import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";

export default function* RootSaga() {
  yield all([authSaga()]);
}

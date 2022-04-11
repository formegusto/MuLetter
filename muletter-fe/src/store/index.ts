import { combineReducers } from "redux";
import auth from "./auth";
import info from "./info";

const rootReducer = combineReducers({ auth, info });

export default rootReducer;

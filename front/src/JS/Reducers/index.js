import { combineReducers } from "redux";
import PsReducer from "./PsReducer";
import GameReducer from "./GameReducer";
import AuthReducer from "./authReducer";

const rootReducer = combineReducers({ PsReducer, GameReducer , AuthReducer});

export default rootReducer;

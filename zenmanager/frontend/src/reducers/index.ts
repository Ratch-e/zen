import { combineReducers } from "redux";
import leadsReducer from "./leads/leads";
import authReducer from "./auth/auth";

export const rootReducer = combineReducers({ leadsReducer, authReducer });

export type RootState = ReturnType<typeof rootReducer>;

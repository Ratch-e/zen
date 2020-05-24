import { combineReducers } from "redux";
import leads from "./leads";

export const rootReducer = combineReducers({ leadsReducer: leads });

export type RootState = ReturnType<typeof rootReducer>;

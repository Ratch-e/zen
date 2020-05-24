import { combineReducers } from 'redux';
import leadsReducer from './leads';

export const rootReducer = combineReducers({ leadsReducer });

export type RootState = ReturnType<typeof rootReducer>;

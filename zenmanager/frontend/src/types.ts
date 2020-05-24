import { lead } from './components/leads/types';

export const SET_LEADS = 'SET_LEADS';
export const DELETE_LEAD = 'DELETE_LEAD';
export const ADD_LEAD = 'ADD_LEAD';

interface SetLeadsAction {
    type: typeof SET_LEADS;
    payload: lead[];
}

interface AddLeadsAction {
    type: typeof ADD_LEAD;
    payload: lead;
}

interface DeleteLeadAction {
    type: typeof DELETE_LEAD;
    payload: string;
}

export type LeadsActionTypes =
    | SetLeadsAction
    | AddLeadsAction
    | DeleteLeadAction;

import { SET_LEADS, DELETE_LEAD, ADD_LEAD, LeadsActionTypes } from "../types";
import { lead } from "../components/leads/types";

interface LeadsStore {
    leads: lead[];
}

const initialState: LeadsStore = {
    leads: [],
};

export default function (
    state = initialState,
    action: LeadsActionTypes,
): LeadsStore {
    switch (action.type) {
        case ADD_LEAD: {
            return {
                ...state,
                leads: [...state.leads, action.payload],
            };
        }

        case SET_LEADS: {
            return {
                ...state,
                leads: action.payload,
            };
        }

        case DELETE_LEAD: {
            const remainingLeads = state.leads.filter(
                (lead: lead) => lead.id !== action.payload,
            );
            return {
                ...state,
                leads: remainingLeads,
            };
        }

        default:
            return state;
    }
}

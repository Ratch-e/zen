import { SET_LEADS, DELETE_LEAD, ADD_LEAD } from "../types";

const initialState = {
    leads: [],
};

export default function (state = initialState, action) {
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
                (lead) => lead.id !== action.payload,
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

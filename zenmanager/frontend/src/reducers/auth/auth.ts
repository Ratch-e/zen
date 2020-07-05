import { Auth, LOGIN_SUCCESS } from "./types";

const initialState: Auth = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
};

export default function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: true,
                isLoading: false,
            };
        }
        default:
            return state;
    }
}

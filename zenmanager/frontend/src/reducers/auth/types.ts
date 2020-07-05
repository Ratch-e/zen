export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export interface Auth {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
}

export interface User {
    id: string;
    username: string;
    email: string;
}

export interface LoginResult {
    data: {
        token: string;
        user: User;
    };
}

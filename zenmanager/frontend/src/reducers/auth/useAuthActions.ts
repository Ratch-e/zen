import axios from "axios";
import { useDispatch } from "react-redux";

import { LOGIN_URL } from "../../api/contants";
import { LOGIN_SUCCESS, LoginResult } from "./types";

export const useAuthActions = () => {
    const dispatch = useDispatch();

    const login = async (username: string, password: string) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ username, password });
        try {
            const { data }: LoginResult = await axios.post(
                LOGIN_URL,
                body,
                config
            );
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data,
            });
            console.log(data);
            document.cookie = `authToken = ${data.token}; max-age=360000`;
        } catch (err) {
            throw new Error(err);
        }
    };

    return { login };
};

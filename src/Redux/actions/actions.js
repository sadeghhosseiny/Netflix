import { Type } from "../action types/actionTypes";

export const setUser = (user) => {
    return {
        type: Type.user,
        payload: user
    };
};
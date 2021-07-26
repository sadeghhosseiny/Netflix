import { Type } from "../action types/actionTypes";

export const setUser = (user) => {
    return {
        type: Type.USER,
        payload: user
    };
};

export const addToMyList = (movie) => {
    return {
        type: Type.ADD_TO_MY_LIST,
        payload: movie
    };
};
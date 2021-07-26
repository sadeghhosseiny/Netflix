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

export const addMovieToBaket = (movies) => {
    return {
        type: Type.ADD_MOVIE_TO_BASKET,
        payload: movies
    };
};

export const moviePage = (movieInfo) => {
    return {
        type: Type.MOVIE_PAGE,
        payload: movieInfo
    };
};
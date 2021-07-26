import { Type } from "../action types/actionTypes";

const initialState = {
    user: [],
    saveData: [],
    movieList: [],
    allMovies: [],
    moviePage: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.USER:
            return {
                ...state,
                user: action.payload,
                saveData: localStorage.setItem('user', action.payload)
            };
        case Type.ADD_TO_MY_LIST:
            return {
                ...state,
                movieList: [...state.movieList, action.payload]
            };
        case Type.ADD_MOVIE_TO_BASKET:
            return {
                ...state,
                allMovies: action.payload
            };
        case Type.MOVIE_PAGE:
            return {
                ...state,
                moviePage: action.payload
            };

        default:
            return state;
    }
};

export { reducer };
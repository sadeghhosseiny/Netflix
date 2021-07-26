import { Type } from "../action types/actionTypes";

const initialState = {
    user: [],
    saveData: [],
    movieList: []
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

        default:
            return state;
    }
};

export { reducer };
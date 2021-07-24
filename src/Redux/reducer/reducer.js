import { Type } from "../action types/actionTypes";

const initialState = {
    user: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.user:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};

export { reducer };
import { ACTION_TYPES } from "../action types/actionTypes";

const initialState = {
  requesting: false,
  success: false,
  error: false,
  users: []
};

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER.SUCCESS:
      return {
        requesting: false,
        success: true,
        error: false,
        users: state?.users ? [...state.users, action.payload] : [{ ...action.payload }]
      };
    case ACTION_TYPES.USER.REQUESTING:
      return { requesting: true, success: false, error: false };
    case ACTION_TYPES.USER.ERROR:
      return { requesting: false, success: false, error: true };
    default:
      return state;
  }
};

export default addUserReducer;
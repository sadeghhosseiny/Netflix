import { ACTION_TYPES } from "../action types/actionTypes";

const initialState = {
  requesting: false,
  success: false,
  error: false,
  delete: false,
  data: null
};

const addMovieToListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_MY_LIST.SUCCESS:
      return {
        requesting: false,
        success: true,
        error: false,
        data: state?.data ? [...state.data, action.payload] : [{ ...action.payload }]
      };
    case ACTION_TYPES.ADD_TO_MY_LIST.DELETE:
      return {
        requesting: false,
        success: false,
        error: false,
        delete: true,
        ...state?.data,
        data:
          state?.data?.filter(item => item.id != action.payload)
      };
    case ACTION_TYPES.ADD_TO_MY_LIST.REQUESTING:
      return { requesting: true, success: false, error: false };
    case ACTION_TYPES.ADD_TO_MY_LIST.ERROR:
      return { requesting: false, success: false, error: true };
    default:
      return state;
  }
};

export default addMovieToListReducer;
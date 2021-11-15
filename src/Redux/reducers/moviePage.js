import { ACTION_TYPES } from "../action types/actionTypes";

const initialState = {
  requesting: false,
  success: false,
  error: false,
  movies: null
};

const moviePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.MOVIE_PAGE.SUCCESS:
      return {
        requesting: false,
        success: true,
        error: false,
        movies: { ...action?.payload }
      };
    case ACTION_TYPES.MOVIE_PAGE.REQUESTING:
      return { requesting: true, success: false, error: false };
    case ACTION_TYPES.MOVIE_PAGE.ERROR:
      return { requesting: false, success: false, error: true };
    default:
      return state;
  }
};

export default moviePageReducer;
import { combineReducers } from "redux";
import { reducer } from '../reducers/allMovies';
import addMovieToListReducer from "../reducers/addMovieToList";
import moviePageReducer from "../reducers/moviePage";

export const rootReducer = combineReducers({
  // reducer,
  addMovieToListReducer,
  moviePageReducer
});
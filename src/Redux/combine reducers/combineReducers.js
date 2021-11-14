import { combineReducers } from "redux";
import { reducer } from '../reducers/allMovies';
import addMovieToListReducer from "../reducers/addMovieToList";

export const rootReducer = combineReducers({
  // reducer,
  addMovieToListReducer
});
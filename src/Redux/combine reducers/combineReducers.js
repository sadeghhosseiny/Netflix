import { combineReducers } from "redux";
import addMovieToListReducer from "../reducers/addMovieToList";
import moviePageReducer from "../reducers/moviePage";

export const rootReducer = combineReducers({
  addMovieToListReducer,
  moviePageReducer
});
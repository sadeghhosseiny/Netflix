import { combineReducers } from "redux";
import { reducer } from '../reducers/allMovies';
import addMovieToListReducer from "../reducers/addMovieToList";
import addUserReducer from "../reducers/addUser";

export const rootReducer = combineReducers({
  // reducer,
  addMovieToListReducer,
  addUserReducer
});
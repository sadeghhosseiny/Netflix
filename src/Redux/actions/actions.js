import { Type } from "../action types/actionTypes";

export const setAllMovies = (movies) => {
  console.log('action%%%%%%%%%%%%%%%%%%%%%%%', movies);
  return {
    type: Type.ALL_MOVIES,
    payload: movies
  };
};

export const setUser = (user) => {
  return {
    type: Type.USER,
    payload: user
  };
};

export const addToMyList = (movie) => {
  return {
    type: Type.ADD_TO_MY_LIST,
    payload: movie
  };
};

export const moviePage = (movieInfo) => {
  return {
    type: Type.MOVIE_PAGE,
    payload: movieInfo
  };
};
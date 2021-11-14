import { ACTION_TYPES } from "../action types/actionTypes";

// export const setAllMovies = (movies) => {
//   return {
//     type: ACTION_TYPES.ALL_MOVIES.SUCCESS,
//     payload: movies
//   };
// };

export const setUser = (user) => {
  return {
    type: ACTION_TYPES.USER.SUCCESS,
    payload: user
  };
};

export const addToMyList = (movie) => {
  return {
    type: ACTION_TYPES.ADD_TO_MY_LIST.SUCCESS,
    payload: movie
  };
};

// export const moviePage = (movieInfo) => {
//   return {
//     type: ACTION_TYPES.MOVIE_PAGE.SUCCESS,
//     payload: movieInfo
//   };
// };

export const removeMovieFromList = (movieId) => {
  return {
    type: ACTION_TYPES.ADD_TO_MY_LIST.DELETE,
    payload: movieId
  };
};
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllMovies } from "../../Redux/actions/actions";
import axios from "../axios/axios";
import requests from "../requests/requests";

export const fetchData = async () => {
  // for (let i = 0; i <= 7; i ++) {
  const req = await axios.get(requests.fetchActionMovies);
  console.log('REQ', req.data.results);
  return (dispatch) => {
    dispatch(setAllMovies(req.data.results));
  };
  // dispatch(setAllMovies(req.data.results));
  // console.log('setEEEETRETR', setAllMovies);
  // }
};

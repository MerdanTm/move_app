import axios from "axios";
import { API_BASE } from "../config/env";

export const fetchMovies = () => {
  return (dispatch) => {
    axios.get(`${API_BASE}/movies`).then((result) => console.log(result));
  };
};

// MOVIES
// https://60a55802c0c1fd00175f3bbf.mockapi.io/:endpoint

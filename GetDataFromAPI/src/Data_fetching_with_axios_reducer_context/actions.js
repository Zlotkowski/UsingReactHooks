import axios from "axios";
import { FETCH_ERROR, FETCH_SUCCESS } from "./constants";

export const downloadData = async (dispatch) => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       dispatch({ type: FETCH_SUCCESS, payload: response.data });
  //     })
  //     .catch((error) => {
  //       dispatch({
  //         type: FETCH_ERROR,
  //         payload: `Something went wrong! :( ${error}`,
  //       });
  //     });

  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return dispatch({
      type: FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: FETCH_ERROR,
      payload: `Something went wrong! :( ${error}`,
    });
  }
};

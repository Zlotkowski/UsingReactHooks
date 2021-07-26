import axios from "axios";
import {
  GET_ERROR,
  GET_POST_ERROR,
  GET_POST_QUERY,
  GET_POST_SUCCESS,
  GET_SUCCESS,
  POST_ERROR,
  POST_REQUEST,
  POST_SUCCESS,
} from "./constants";

const URI = "https://jsonplaceholder.typicode.com/todos";

export const downloadData = async (dispatch) => {
  try {
    const { data } = await axios.get(URI);
    dispatch({
      type: GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: `Something is wrong with download data! :( ${error}`,
    });
  }
};

export const downloadPost = async (dispatch, id) => {
  dispatch({ type: GET_POST_QUERY });
  try {
    const { data } = await axios.get(`${URI}/${id}`);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POST_ERROR,
      payload: `Something is wrong with download data! :( ${error}`,
    });
  }
};

export const sendData = async (dispatch, postTitle) => {
  try {
    dispatch({ type: POST_REQUEST });
    const { data } = await axios.post(URI, {
      title: postTitle,
    });
    dispatch({
      type: POST_SUCCESS,
      payload: `Data is send! ${data.title} is adding with ID: ${data.id}`,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: `Something is wrong with sending data! :( ${error}`,
    });
  }
};

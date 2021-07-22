import React, { useEffect, useReducer } from "react";
import Axios from "axios";

const initialState = {
  loading: true,
  error: "",
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default function DataFetchingOne() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
          payload: `Something went wrong! :( ${error}`,
        });
      });
  }, []);

  return (
    <div>
      {state.loading && "Loading..."}
      {state.data &&
        state.data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      {state.error ? state.error : null}
    </div>
  );
}

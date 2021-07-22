// import React, { createContext, useState } from "react";

// const DataContext = createContext();

// function DataContextProvider(props) {
//   const [data, setData] = useState([]);
//   return (
//     <DataContext.Provider value={{ data, setData }}>
//       {props.children}
//     </DataContext.Provider>
//   );
// }

// export { DataContext, DataContextProvider };

import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import { FETCH_ERROR, FETCH_SUCCESS } from "./constants";
import DataReducer from "./DataReducer";

const initialState = {
  loading: true,
  error: "",
  data: [],
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//       return {
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//     case "FETCH_ERROR":
//       return {
//         loading: false,
//         data: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const DataContext = createContext();

function DataContextProvider(props) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => {
  //         dispatch({ type: "FETCH_SUCCESS", payload: response.data });
  //       })
  //       .catch((error) => {
  //         dispatch({
  //           type: "FETCH_ERROR",
  //           payload: `Something went wrong! :( ${error}`,
  //         });
  //       });
  //   }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: `Something went wrong! :( ${error}`,
        });
      });
  }, []);

  return (
    <DataContext.Provider value={{ state }}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };

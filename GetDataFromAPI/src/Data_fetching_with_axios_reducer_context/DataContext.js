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

import React, { createContext, useEffect, useReducer, useState } from "react";
import { downloadData } from "./actions";
import { REFRESH_DATA } from "./constants";
// import { FETCH_ERROR, FETCH_SUCCESS } from "./constants";
// import axios from "axios";
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
  const [refresh, setRefresh] = useState(false);

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

  const toggleRefresh = () => {
    setRefresh(refresh === false ? true : false);
  };

  useEffect(() => {
    dispatch({ type: REFRESH_DATA });
    downloadData(dispatch);
  }, [refresh]);

  return (
    <DataContext.Provider value={{ state, toggleRefresh }}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };

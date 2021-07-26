import React, { createContext, useEffect, useReducer, useState } from "react";
import { downloadData, downloadPost, sendData } from "./actions";
import { DATA_REFRESH } from "./constants";
import DataReducer from "./DataReducer";

const initialState = {
  getDataState: {
    loading: true,
    error: "",
    data: [],
  },
  getDataPostState: {
    loading: true,
    error: "",
    data: [],
  },
  postDataState: {
    loading: false,
    error: "",
    data: "",
  },
};

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [refresh, setRefresh] = useState(false);
  const [title, setTitle] = useState("");
  const [detailsId, setDetailsId] = useState(1);

  const toggleRefresh = () => {
    setRefresh(refresh === true ? false : true);
  };

  const sendingData = () => {
    sendData(dispatch, title);
  };

  useEffect(() => {
    downloadPost(dispatch, detailsId);
  }, [detailsId]);

  useEffect(() => {
    dispatch({ type: DATA_REFRESH });
    downloadData(dispatch);
  }, [refresh]);

  return (
    <DataContext.Provider
      value={{
        state,
        setDetailsId,
        toggleRefresh,
        sendingData,
        setTitle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

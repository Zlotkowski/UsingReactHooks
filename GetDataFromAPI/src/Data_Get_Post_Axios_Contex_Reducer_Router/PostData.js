import React, { useContext } from "react";
import { DataContext } from "./DataContext";

export default function PostData() {
  const { state, setTitle, sendingData } = useContext(DataContext);

  return (
    <div>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={sendingData}>Send Data</button>
      {state.postDataState.data ? <h3>{state.postDataState.data}</h3> : null}
      {state.postDataState.loading && "Seanding..."}
      {state.postDataState.error && state.postDataState.error}
    </div>
  );
}

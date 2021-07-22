import React, { useContext } from "react";
import { DataContext } from "./DataContext";

export default function ShowData(props) {
  const { state } = useContext(DataContext);

  return (
    <div>
      {state.loading && "Loading..."}
      {state.data &&
        state.data.map((post) => {
          return (
            <li key={post.id}>{`Post Id: ${post.id} Title: ${post.title}`}</li>
          );
        })}
      {state.error ? state.error : null}
    </div>
  );
}

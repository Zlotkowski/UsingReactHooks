import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

export default function ShowData() {
  const { state } = useContext(DataContext);
  return (
    <div>
      {state.getDataState.loading && "Loading..."}
      {state.getDataState.data.map((todo) => {
        return (
          <ul key={todo.id}>
            <Link to={`/details/${todo.id}`}>
              <li>{`Post ID: ${todo.id} with title:${todo.title}`}</li>
            </Link>
          </ul>
        );
      })}
      {state.getDataState.error ? state.error : null}
    </div>
  );
}

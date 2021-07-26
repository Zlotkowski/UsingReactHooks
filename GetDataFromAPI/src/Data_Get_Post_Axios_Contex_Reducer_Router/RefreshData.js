import React, { useContext } from "react";
import { DataContext } from "./DataContext";

export default function RefreshData() {
  const { toggleRefresh } = useContext(DataContext);
  return (
    <div>
      <button onClick={toggleRefresh}>Refresh</button>
    </div>
  );
}

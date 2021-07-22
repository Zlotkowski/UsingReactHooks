import React from "react";
import { DataContextProvider } from "./DataContext";
import ShowData from "./ShowData";

export default function DataFetchingAxiosReducerContext() {
  return (
    <div>
      <DataContextProvider>
        <ShowData />
      </DataContextProvider>
    </div>
  );
}

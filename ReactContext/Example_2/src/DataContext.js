import React, { createContext } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const data = "Hello form context";
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

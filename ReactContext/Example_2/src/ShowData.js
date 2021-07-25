import React, { useContext } from "react";
import { DataContext } from "./DataContext";

export default function ShowData() {
  const { data } = useContext(DataContext);
  return <div>{data}</div>;
}

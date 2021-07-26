import React from "react";
import "./App.css";
import PostData from "./PostData";
import RefreshData from "./RefreshData";
import ShowData from "./ShowData";

export default function HomeScrean() {
  return (
    <div>
      <h2>Post data to api</h2>
      <PostData />
      <p></p>
      <RefreshData />
      <p></p>
      <ShowData />
    </div>
  );
}

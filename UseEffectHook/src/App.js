import React from "react";
import UserInfoClassComponent from "./UserInfoClassComponent";
import UserInfoFunctionComponent from "./UserInfoFunctionComponent";

function App() {
  return (
    <div>
      <p>Class method example:</p>
      <UserInfoClassComponent />
      <p>Function method example:</p>
      <UserInfoFunctionComponent />
    </div>
  );
}

export default App;

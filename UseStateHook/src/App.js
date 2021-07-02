import React from "react";
import ExampleClassComponent from "./ExampleClassComponent";
import ExampleFunctionComponent from "./ExampleFunctionComponent";

function App() {
  return (
    <div>
      <p>Class method example:</p>
      <ExampleClassComponent />
      <p>Function method example:</p>
      <ExampleFunctionComponent />
    </div>
  );
}

export default App;

import React, { useState } from "react";

export default function ExampleFunctionComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increase = () => {
    setCount(count + 1);
  };

  const inputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div>
        <p>Please, write your name</p>
        <input type="text" name="name" onChange={inputChange} value={name} />
        {name ? <p>Hello {name}</p> : undefined}
      </div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={increase}>Click me</button>
      </div>
    </div>
  );
}

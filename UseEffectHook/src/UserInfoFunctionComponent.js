import React, { useEffect, useState } from "react";

export default function UserInfoFunctionComponent() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);

  const userChange = (event) => {
    setUserId(event.target.value);
  };

  useEffect(() => {
    console.log("useEffect runs one time!");
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
    return () => {
      console.log("Clean up useEffect"); // clean up runs when component will remove and new render will run!
    };
  }, [userId]); // if you set empty array in dependency parameter, your's function run one time!

  return (
    <div>
      User Id:
      <input type="text" value={userId} onChange={userChange} />
      <br />
      Name: {user.name}
      <br />
      Email: {user.email}
    </div>
  );
}

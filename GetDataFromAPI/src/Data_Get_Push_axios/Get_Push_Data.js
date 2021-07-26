// // //GET DATA FROM API FETCH

// // fetch("https://reqres.in/api/users/1")
// //   .then((res) => res.json())
// //   .then((data) => console.log(data))
// //   .catch((error) => console.log(`ERROR: ${error}`));

// // //POST DATA TO API FETCH

// // fetch("https://reqres.in/api/users", {
// //   method: "POST",
// //   headers: { "Content-Type": "application/json" },
// //   body: JSON.stringify({ name: "User 1" }),
// // })
// //   .then((res) => res.json())
// //   .then((data) => console.log(data))
// //   .catch((error) => console.log(`ERROR: ${error}`));

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function GetData() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);
//   const [refresh, setRefresh] = useState(true);

//   const toggleRefresh = () => {
//     setLoading(true);
//     setData([]);
//     setRefresh(refresh === true ? false : true);
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       setLoading(false);
//       setData(response.data);
//       setError("");
//       console.log(response);
//     } catch (error) {
//       setLoading(false);
//       setData([]);
//       setError(`Something went wrong! :( ${error}`);
//     }
//   };

//   const sendData = async () => {
//     try {
//       console.log("Start sending Data");
//       const { data } = await axios.post("https://jsonplaceholder.typicode.com/users", {
//         name: "Tom",
//         username: "TomTom",
//       });
//       console.log("Data send");
//       console.log(data);
//     } catch (error) {
//       console.log(`Error ${error}`);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [refresh]);

//   return (
//     <div>
//       <button onClick={toggleRefresh}>Refresh</button>
//       <button onClick={sendData}>POST req</button>
//       {loading && "Loading..."}
//       {data &&
//         data.map((user) => {
//           return <li key={user.id}>{user.name}</li>;
//         })}
//       {error ? error : null}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetData() {
  const [data, setData] = useState([]);
  const [sending, setSending] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendData = async () => {
    try {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          name: name,
          email: email,
        }
      );

      setSending("Send");
      setData([]);
      setName("");
      setEmail("");
      console.log(data);
    } catch (error) {
      setError(`Someting get wrong!`);
    }
  };

  const toggleRefresh = () => {
    setLoading(true);
    setData([]);
    setSending("");
    setRefresh(refresh === true ? false : true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setLoading(false);
      setError("");
      setData(response.data);
    } catch (error) {
      setLoading(false);
      setError(`Someting get wrong! ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <div>
      <button onClick={toggleRefresh}>Refresh</button>
      <div>
        <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button onClick={sendData}>POST data</button>
      </div>
      {loading && "Loading..."}
      {data &&
        data.map((post) => {
          return <li key={post.id}>{post.name}</li>;
        })}
      {sending && <p>Sending!</p>}
      {error && error}
    </div>
  );
}

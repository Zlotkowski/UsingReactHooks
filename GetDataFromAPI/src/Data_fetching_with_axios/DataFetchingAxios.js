import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setData({});
        setError(`Something went wrong! :( ${error}`);
      });
  }, []);

  return (
    <div>
      {loading && "Loading..."}
      {data &&
        data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      {error ? error : null}
    </div>
  );
}

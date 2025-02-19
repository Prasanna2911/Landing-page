import React, { useEffect, useState } from "react";
import "../components/Test";

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json))
      //   .then((json) => console.log(json))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/post")
  //     .then((res) => {
  //       res.json();
  //       console.log(res);
  //     })
  //     .then((res) => console.log(res));
  // }, [count]);

  return (
    <div>
      <h1>data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;

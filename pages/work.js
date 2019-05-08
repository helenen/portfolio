import Header from "../components/Header";
import React, { useState, useEffect } from "react";

function Work() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("http://localhost:1337/articles");
    const json = await response.json();
    setData(json);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {data.map((data, index) => (
        <ul key={index}>
          <h1>{data.titre}</h1>
          <h2>{data.description}</h2>
          <img
            style={{ backgroundColor: "black", width: "20px", height: "20px" }}
            src={data.image}
          />
        </ul>
      ))}
    </div>
  );
}

export default Work;

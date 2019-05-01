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
      <ul>{data.map(data => <h1>{data.Titre}</h1>)}</ul>
    </div>
  );
}

export default Work;

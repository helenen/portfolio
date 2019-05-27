import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import Head from "next/head";

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css"
        />
      </Head>
      <Header />
      {data.map((data, index) => (
        <ul key={index}>
          <h1>{data.titre}</h1>
          <h2>{data.description}</h2>
        </ul>
      ))}
    </div>
  );
}

export default Work;

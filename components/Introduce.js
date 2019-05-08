import React, { useState, useEffect } from "react";

function Introduce() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("http://localhost:1337/articles");
    const json = await response.json();
    setData(json);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignContent: "flex-start",
      margin: "7%"
    },
    h1: {
      color: "blue",
      fontSize: "4em",
      marginLeft: "3em"
    },
    p: {
      height: "100px",
      weight: "1em",
      backgroundColor: "blue",
      marginLeft: "9em",
      marginRight: "9em"
    }
  };

  return (
    <div>
      <h1 style={style.h1}>Hi,</h1>
      {data.map(data => <p style={style.p}>{data.introduce}</p>)}
    </div>
  );
}

export default Introduce;

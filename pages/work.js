import Header from "../components/Header";
import React, { useState } from "react";

function Work() {
  const [title, description] = useState("pilou");
  const alertName = () => {
    alert(title);
  };
  const handleNameInput = e => {
    setTitle(e.target.value);
  };
  const methods = () => {
    useEffect(() =>
      fetch("http:localhost:1337/articles")
        .then(response => response.json())
        .then(data => useState({ data }))
    );
  };
  return (
    <div>
      <Header />
      <h2>{data.title}</h2>
      <h3 onClick={alertName}>dzdz{data.contenu}</h3>
    </div>
  );
}

export default Work;

import Header from "../components/Header";
import React, { useState, useEffect } from "react";


function Work() {
  const [pokemon, setPokemons] = useState({ data: [] });
  useEffect(async () => {
    const result = await fetch(
      'https://swapi.co/api/people/1/'
        .then(results => {
          return results.json()
        })
    );
    setPokemons(result.data);
  }, [])
  console.log(setPokemons);

  return (
    <div>
      <Header />
      <ul>
        {/* {pokemon.map(item => (
          <li>
            <a href={item.name}>{item.height}</a>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default Work;

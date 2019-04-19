import Header from "../components/Header";
import React, { useState , useEffect} from "react";


function Work() { 
    const [pokemon, setPokemons] = useState([]);
    useEffect(async () => {
        const result = await fetch(
        'https://swapi.co/api/people/1/',
        );
        setPokemons(result.data);
    },[])

  return (
    <div>
      <Header />
      <ul>
        {pokemon.map(item => (
          <li>
            <a href={item.name}>{item.height}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;

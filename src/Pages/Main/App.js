import { useEffect, useState } from "react";
import "./style.css";
import HeaderPoke from "../../Components/HeaderPoke";
import CardPoke from "../../Components/CardPoke";
// import api from "../../Services/api";
import pokemonstTeste from "../../Services/MokePokemons";

function App() {
  const [pokemonsData, setPokemonsData] = useState(pokemonstTeste);
  console.log(pokemonsData);

  return (
    <div className="App">
      <HeaderPoke />
      <nav className="displayFlex">
        <div className="container-cards displayFlex">
          {pokemonsData.map((pokemon) => {
            return (
              <CardPoke
                name={pokemon.name}
                species={pokemon.species.name}
                sprintes={pokemon.sprites.back_default}
                weight={pokemon.weight}
                height={pokemon.height}
              />
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;

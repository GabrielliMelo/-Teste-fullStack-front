import { useState } from "react";
import "./style.css";
import HeaderPoke from "../../Components/HeaderPoke";
import CardPoke from "../../Components/CardPoke";
import InputPoke from "../../Components/InputPoke";
// import api from "../../Services/api";
import pokemonstTeste from "../../Services/MokePokemons";

function App() {
  const [pokemonsData, setPokemonsData] = useState(pokemonstTeste);

  return (
    <div className="App">
      <HeaderPoke />
      <InputPoke />
      <nav className="displayFlex">
        <h1 className="btn-poke displayFlex">Anterior</h1>
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
        <h1 className="btn-poke displayFlex">Proxima</h1>
      </nav>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./style.css";
import HeaderPoke from "../../Components/HeaderPoke";
import CardPoke from "../../Components/CardPoke";
import InputPoke from "../../Components/InputPoke";
import api from "../../Services/api";

function App() {
  const [pokemonsDataApi, setPokemonsDataApi] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const pagedListPokemon = async () => {
      const response = await api.get(`pokemons?limit=10&page=${page}`);
      setPokemonsDataApi(response.data);
    };
    pagedListPokemon();
  }, [page]);

  return (
    <div className="App">
      <HeaderPoke />
      <InputPoke />
      <nav className="displayFlex">
        <h1
          className="btn-poke displayFlex"
          onClick={() => setPage(page === 1 ? 1 : page - 1)}
        >
          Anterior
        </h1>
        <div className="container-cards displayFlex">
          {pokemonsDataApi.map((pokemon) => {
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
        <h1 className="btn-poke displayFlex" onClick={() => setPage(page + 1)}>
          Proxima
        </h1>
      </nav>
    </div>
  );
}

export default App;

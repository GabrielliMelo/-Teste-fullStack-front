import { useEffect, useState } from "react";
import "./style.css";
import HeaderPoke from "../../Components/HeaderPoke";
import CardPoke from "../../Components/CardPoke";
import api from "../../Services/api";
import ModalCardPoke from "../../Components/ModalCardPoke";

function App() {
  const [pokemonsDataApi, setPokemonsDataApi] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [modalCardPoke, setModalCardPoke] = useState(false);

  useEffect(() => {
    const pagedListPokemon = async () => {
      const response = await api.get(`pokemons?limit=10&page=${page}`);
      setPokemonsDataApi(response.data);
    };
    pagedListPokemon();
  }, [page]);

  const pokemonInfo = async () => {
    const response = await api.get(`pokemons/${name}`);
    setPokemon(response.data);
    if (response.statusText === "OK") {
      setModalCardPoke(true);
    }
  };

  const handleToggleModal = () => {
    setModalCardPoke((prevState) => !prevState);
  };

  return (
    <div className="App">
      <HeaderPoke />
      <div className="inputPoke displayFlex">
        <input
          type="text"
          placeholder="Buscar pokemon"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={pokemonInfo}>Buscar</button>
      </div>
      <nav className="displayFlex">
        <h1
          className="btn-poke displayFlex"
          onClick={() => setPage(page === 1 ? 1 : page - 1)}
        >
          Anterior
        </h1>
        <div className="container-cards displayFlex">
          {pokemonsDataApi.map((pokemon, index) => {
            return (
              <CardPoke
                key={index}
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
      <ModalCardPoke
        abilities={pokemon.abilities}
        name={pokemon.name}
        species={pokemon.species ? pokemon.species.name : ""}
        sprintes={pokemon.sprites ? pokemon.sprites.back_default : ""}
        weight={pokemon.weight}
        height={pokemon.height}
        modalCardPoke={modalCardPoke}
        handleToggleModal={handleToggleModal}
      />
    </div>
  );
}

export default App;

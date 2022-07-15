import "./style.css";
import HeaderPoke from "../../Components/HeaderPoke";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Services/api";
import pokeball from "../../Assets/pokeball.png";

function PokemonPage() {
  const { pokemon } = useParams();
  const [pokemonInfo, setPokemon] = useState({});

  useEffect(() => {
    const pokemonInfo = async () => {
      const response = await api.get(`pokemons/${pokemon}`);
      setPokemon(response.data);
    };
    pokemonInfo();
  }, [pokemon]);

  return (
    <div className="PokemonPage">
      <HeaderPoke />
      <div className="page-poke">
        <section>
          <div>
            <h2>Nome: </h2>
            {pokemonInfo.name}
          </div>
          <div>
            <h2>Especie: </h2>{" "}
            {pokemonInfo.species ? pokemonInfo.species.name : pokeball}
          </div>
          <div>
            <h2>weight: </h2>
            {pokemonInfo.weight}kg
          </div>
          <div>
            <h2>Height: </h2>
            0.{pokemonInfo.height}m
          </div>
          <div>
            {/* <ul>
              <h2>Habilidades: </h2> */}
            {/* <li>
                {pokemonInfo.abilities
                  ? pokemonInfo.abilities[0].ability.name
                  : ""}
              </li>
              <li>
                {pokemonInfo.abilities[1]
                  ? pokemonInfo.abilities[1].ability.name
                  : ""}
              </li> */}
            {/* </ul> */}
          </div>
        </section>
        <img
          src={pokemonInfo.sprites ? pokemonInfo.sprites.back_default : ""}
          alt="img poke"
        />
      </div>
    </div>
  );
}

export default PokemonPage;

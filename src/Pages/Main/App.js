import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import PokemonPage from "../PokemonPage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/home" element={<Home />} exact />
      <Route path="/pokemons/:pokemon" element={<PokemonPage />} />
    </Routes>
  );
}

export default Main;

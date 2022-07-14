import "./style.css";
import imgTest from "../../Assets/charmeleon-teste.jpeg";
import pokeBall from "../../Assets/pokeball.png";

function CardPoke() {
  return (
    <div className="cardPoke displayFlex">
      <h2>Charmeleon</h2>
      <img className="img-pokeball" src={pokeBall} alt="poke-ball" />
      <img className="img-poke" src={imgTest} alt="pokemon" />
      {/* especie altura peso */}
      <nav className="section-info">
        <h3>
          <b>Especie:</b> teste
        </h3>
        <div className="heigth-weight displayFlex">
          <span>
            <b>Altura:</b> 0.7m
          </span>
          <span>
            <b>Peso:</b> 69kg
          </span>
        </div>
      </nav>
    </div>
  );
}

export default CardPoke;

import "./style.css";
import pokeball from "../../Assets/pokeball.png";

function CardPoke({ name, species, sprintes, weight, height }) {
  return (
    <div className="cardPoke displayFlex">
      <h2>{name}</h2>
      <img
        className="img-poke"
        src={sprintes ? sprintes : pokeball}
        alt="pokemon"
      />
      {/* especie altura peso */}
      <nav className="section-info">
        <h3>
          <b>Especie:</b> {species}
        </h3>
        <div className="heigth-weight displayFlex">
          <span>
            <b>Altura:</b> {height}cm
          </span>
          <span>
            <b>Peso:</b> {weight}kg
          </span>
        </div>
      </nav>
    </div>
  );
}

export default CardPoke;

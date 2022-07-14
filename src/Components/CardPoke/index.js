import "./style.css";
import imgTeste from "../../Assets/charmeleon-teste.jpeg";

function CardPoke() {
  return (
    <div className="cardPoke">
      <h2>Charmeleon</h2>
      <img src={imgTeste} alt="pokemon" />
      {/* especie altura peso */}
      <nav className="heigth-weight">
        <h3>
          <b>Especie:</b> teste
        </h3>
        <span>
          <b>Altura:</b> 0.7m
        </span>
        <span>
          <b>Peso:</b> 69kg
        </span>
      </nav>
    </div>
  );
}

export default CardPoke;

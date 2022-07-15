import "./style.css";
import pokeball from "../../Assets/pokeball.png";

function ModalCardPoke({
  name,
  species,
  sprintes,
  weight,
  height,
  abilities,
  modalCardPoke,
  handleToggleModal,
}) {
  if (!modalCardPoke) {
    return null;
  }

  return (
    <div className="modal-card-poke displayFlex">
      <div className="Onepoke displayFlex">
        <h2>
          {name} <b onClick={handleToggleModal}>X</b>
        </h2>
        <img
          className="img-poke img-modal"
          src={sprintes ? sprintes : pokeball}
          alt="pokemon"
        />
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
          <b>Habilidade(s):</b>
          <ul>
            <li>1: {abilities[0].ability.name}</li>
            <li>2: {abilities[1].ability.name}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ModalCardPoke;

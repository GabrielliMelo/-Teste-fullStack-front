import "./style.css";
import { useNavigate } from "react-router-dom";

function HeaderPoke() {
  const navigate = useNavigate();
  return (
    <header className="headerPoke displayFlex">
      <h1>Pokemon</h1>
      <h1 className="home-header" onClick={() => navigate("/home")}>
        Home
      </h1>
    </header>
  );
}

export default HeaderPoke;

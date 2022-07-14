import "./style.css";
import HeaderPoke from "../../Components/HeaderPoke";
import CardPoke from "../../Components/CardPoke";

function App() {
  return (
    <div className="App">
      <HeaderPoke />
      <div className="container-cards displayFlex">
        <CardPoke />
        <CardPoke />
        <CardPoke />
        <CardPoke />
      </div>
    </div>
  );
}

export default App;

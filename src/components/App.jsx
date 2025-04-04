import "../scss/App.scss";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import callToApi from "../services/callToApi";
import Filters from "./Filters";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    callToApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const onChangeName = (value) => {
    setNameInput(value);
  };

  const filteredList = characters.filter((character) => {
    return character.name.toLowerCase().includes(nameInput);
  });

  return (
    <>
      <header className="header">
        <img className="header_logo" src={logo} alt="logo" />
      </header>
      <main className="main">
        <Filters onChangeName={onChangeName} />
        <CharacterList characters={filteredList} />
        <p className="resultsMessage">
          {filteredList.length === 0
            ? "No se han encontrado coincidencias :("
            : ""}
        </p>
      </main>
    </>
  );
}

export default App;

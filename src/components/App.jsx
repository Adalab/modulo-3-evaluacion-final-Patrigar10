import "../scss/App.scss";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import callToApi from "../services/callToApi";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route } from "react-router-dom";
import localStorage from "../services/localStorage";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameInput, setNameInput] = useState(localStorage.get("nameInput", ""));
  const [speciesSelect, setSpeciesSelect] = useState(
    localStorage.get("speciesSelect", "")
  );
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    callToApi().then((data) => {
      setCharacters(data);
      setloading(false);
    });
  }, []);

  useEffect(() => {
    if (nameInput === "") {
      setMessage("");
      if (speciesSelect === "") {
        setMessage("");
      }
    } else if (filteredList.length === 0) {
      setMessage("No se han encontrado coincidencias :(");
    }
  }, [nameInput, speciesSelect]);

  const onChangeName = (value) => {
    setNameInput(value);
    localStorage.set("nameInput", value);
  };

  const onChangeSpecies = (value) => {
    setSpeciesSelect(value);
    localStorage.set("speciesSelect", value);
  };

  const filteredList = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(nameInput);
    })
    .filter((character) => {
      if (speciesSelect === "") {
        return true;
      } else {
        return character.species === speciesSelect;
      }
    });

  return (
    <>
      <header className="header">
        <img className="header_logo" src={logo} alt="logo" />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  onChangeName={onChangeName}
                  nameInput={nameInput}
                  onChangeSpecies={onChangeSpecies}
                  speciesSelect={speciesSelect}
                />
                <CharacterList characters={filteredList} />
                <p className="resultsMessage"> {message} </p>
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <CharacterDetail characters={filteredList} loading={loading} />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

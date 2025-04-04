import "../scss/App.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  return (
    <ul className="characterList">
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;

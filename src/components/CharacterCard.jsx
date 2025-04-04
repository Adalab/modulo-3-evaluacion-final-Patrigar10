import "../scss/App.scss";

const CharacterCard = ({ character }) => {
  return (
    <li className="characterCard">
      <img
        className="characterCard_img"
        src={character.image}
        alt={character.name}
      />
      <div className="characterCard_text">
        <h3>{character.name}</h3>
        <p>{character.species}</p>
      </div>
    </li>
  );
};

export default CharacterCard;

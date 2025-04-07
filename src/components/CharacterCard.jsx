import "../scss/App.scss";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <li className="characterCard">
      <Link to={`/detail/${character.id}`}>
        <img
          className="characterCard_img"
          src={character.image}
          alt={character.name}
        />
        <div className="characterCard_text">
          <h3>{character.name}</h3>
          <p>{character.species === "Human" ? "Human" : "👽"}</p>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;

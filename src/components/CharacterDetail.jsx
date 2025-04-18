import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import backArrow from "../images/backArrow.png";

const CharacterDetail = ({ characters, loading }) => {
  const { id } = useParams();
  // console.log(id);
  // console.log(characters);

  const selectedCharacter = characters.find((character) => {
    return character.id === parseInt(id);
  });

  if (loading) {
    return <p></p>;
  } else if (!selectedCharacter) {
    return (
      <p className="characterDetailMessage">
        El personaje que buscas no existe :(
      </p>
    );
  }

  return (
    <>
      <article className="characterDetail">
        <img
          className="characterDetail_img"
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
        />
        <div className="characterDetail_text">
          <h3>{selectedCharacter.name}</h3>
          <p>
            <span className="characterDetail_text_category">Status:</span>{" "}
            {selectedCharacter.status === "Alive" ? "Alive" : "💀"}
          </p>
          <p>
            <span className="characterDetail_text_category">Species:</span>{" "}
            {selectedCharacter.species === "Human" ? "🧍‍♀️" : "👽"}
          </p>
          <p>
            <span className="characterDetail_text_category">Planet:</span>{" "}
            {selectedCharacter.planet}
          </p>
          <p>
            <span className="characterDetail_text_category">Episodes:</span>{" "}
            {selectedCharacter.episodes}
          </p>
        </div>
      </article>
      <Link to="/" className="linkBack">
        <img src={backArrow} alt="back arrow" />
      </Link>
    </>
  );
};

export default CharacterDetail;

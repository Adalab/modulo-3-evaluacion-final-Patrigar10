const callToApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results.map((character) => {
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          planet: character.origin.name,
          status: character.status,
          episodes: character.episode.length,
          id: character.id,
        };
      });
      return characters;
    });
};

export default callToApi;

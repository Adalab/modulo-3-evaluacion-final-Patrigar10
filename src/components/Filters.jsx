import "../scss/App.scss";

const Filters = ({
  onChangeName,
  nameInput,
  onChangeSpecies,
  speciesSelect,
  onChangeAlph,
}) => {
  const handleChangeName = (event) => {
    onChangeName(event.target.value);
  };

  const handleChangeSpecies = (event) => {
    onChangeSpecies(event.target.value);
  };

  const handleChangeAphab = (event) => {
    onChangeAlph(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form_nameInput"
        id="name"
        type="text"
        value={nameInput}
        placeholder="Search by name..."
        onChange={handleChangeName}
      />
      <select
        name="species"
        className="form_speciesSelect"
        onChange={handleChangeSpecies}
      >
        <option value="">All species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <label className="form_alphabeticalLabel" htmlFor="alphabetical">
        Alphabetical order{" "}
        <input
          type="checkbox"
          id="alphabetical"
          value="alphabetical"
          onChange={handleChangeAphab}
        />
      </label>
    </form>
  );
};

export default Filters;

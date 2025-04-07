import "../scss/App.scss";

const Filters = ({ onChangeName, nameInput }) => {
  const handleChangeName = (event) => {
    onChangeName(event.target.value);
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
        placeholder="Buscar por nombre..."
        onChange={handleChangeName}
      />
    </form>
  );
};

export default Filters;

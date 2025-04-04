import "../scss/App.scss";

const Filters = ({ onChangeName }) => {
  const handleChangeName = (event) => {
    onChangeName(event.target.value);
  };

  return (
    <form className="form">
      <input
        className="form_nameInput"
        id="name"
        type="text"
        placeholder="Buscar por nombre..."
        onChange={handleChangeName}
      />
    </form>
  );
};

export default Filters;

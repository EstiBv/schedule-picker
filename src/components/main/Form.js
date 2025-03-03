import React from "react";
import "../../styles/Form.scss";
import PropTypes from "prop-types";

const Form = (props) => {
  // liftings
  const handleFormSubmit = () => {
    props.handleCloseModal();
  };

  const handleInputName = (ev) => {
    props.handleInputChange(ev.target.value);
  };

  const handleInitialHour = (ev) => {
    props.handleInputHoursInitial(ev.target.value);
  };

  const handleFinalHour = (ev) => {
    props.handleInputFinalHours(ev.target.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form">
        <label htmlFor="name" className="form__label">
          Nombre
        </label>
        <input
          type="text"
          name="text"
          id="name"
          className="form__input"
          onChange={handleInputName}
          value={props.textInput}
        />

        <label htmlFor="initial" className="form__label">
          Hora Inicio
        </label>
        <select
          name="text"
          id="initial"
          className="form__input"
          onChange={handleInitialHour}
        >
          <option value="--:--">--:--</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
        </select>

        <label htmlFor="final" className="form__label">
          Hora Fin
        </label>
        <select
          name="text"
          id="final"
          className="form__input"
          onChange={handleFinalHour}
        >
          <option value="--:--">--:--</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
        </select>
      </form>
    </>
  );
};

Form.propTypes = {
  textInput: PropTypes.string,
};

export default Form;

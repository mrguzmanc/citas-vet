import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4.js";

const Formulario = ({ crearCita }) => {
  // Crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);

    cita.id = uuid();

    crearCita(cita);

    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h3>Crear Cita</h3>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre del responsable</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del responsable"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button
          type="submit"
          className="button u-full-width"
          onClick={submitCita}
        >
          Agregar Cita
        </button>
      </form>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
    </Fragment>
  );
};

export default Formulario;

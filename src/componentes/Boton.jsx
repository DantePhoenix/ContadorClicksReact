import React from "react";
import "../hojasDeEstilo/Boton.css"

function Boton({ texto, btnClic, btnRest, manejarClic }) {
  return (
    <button
      // La clase cambia segun el boton que vaya a usar (usando el operador ternario)
      className={btnClic ? "btn-Clic" : "btn-Reini"}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;

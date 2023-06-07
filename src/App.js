import "./App.css";
import clicksImg from "./imagenes/clicksImg.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/contador";
import { useState } from "react"; // El useState es un Hook (Agrega un estado a un componente funcional)

function App() {
  const [numClicks, setNumClicks] = useState(0); //En [] le paso que va a cambiar, luego con que cambiarlo y despues el valor del estado inicial

  //Creando las funciones para manejar los clicks (Event Listener)
  const manejarClic = () => {
    //console.log("Hice un click");
    setNumClicks(numClicks + 1); // al realizarle un click al boton se actualiza el estado inicial sumandole 1 a ese estado
  };

  const reiniciarContador = () => {
    //console.log("reiniciando");
    setNumClicks(0); //Establecer el nuevo estado a cero
  };

  return (
    <div className="App">
      <div className="contenedor-logo">
        <img className="fcLogo" src={clicksImg} alt={"clicks"}></img>
      </div>

      <div className="contenedor-contador">
        <Contador 
        numClicks={numClicks}>

        </Contador>

        <Boton
          texto="Click"
          btnClic={true}
          //Usando el event Listener
          manejarClic={manejarClic}
        ></Boton>

        <Boton
          texto="Reiniciar"
          btnRest={false}
          //Usando el event Listener
          manejarClic={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}

export default App;

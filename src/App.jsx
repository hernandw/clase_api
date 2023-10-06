
import { useState } from "react";
import Buscador from "./components/Buscador";
import Producto from "./components/Producto";

const App = () => {
 const [palabra, setPalabra] = useState('')
 

 

  return (
    <div>
      <Buscador palabra={palabra} setPalabra={setPalabra} />
      <Producto palabra={palabra} />
    </div>
  );
};

export default App;

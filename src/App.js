import React,{Fragment, useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais:''
});

  return (
    <Fragment>
      <Header
        titulo='Clima React APP'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                <Formulario
                    busqueda={busqueda}
                    guardarBusqueda={guardarBusqueda}
                />
            </div>
            <div className="col m6 s12">
                2
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;

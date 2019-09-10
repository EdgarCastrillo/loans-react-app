import React, { Component, Fragment} from 'react';

import './normalize.css';
import './skeleton.css'

import Form from './components/Form'
import { calcularTotal } from './helpers'

class App extends Component {

  datosPresatamo = (cantidad, plazo) => {
    // console.log('desde app.js')
    // console.log(cantidad)
    // console.log(plazo)
    calcularTotal(cantidad, plazo)
  }

  render() {
    return (
      <Fragment>
        <h1>Calcular prestamo</h1>
        <div className="container">
          <Form 
            datosPrestamo={this.datosPresatamo}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;

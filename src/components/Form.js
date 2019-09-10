
import React, { Component } from 'react';

class Form extends Component {
  state = { 
    cantidad: '',
    plazo: ''
  }


  actualizarState = (e) => {
    // Leer los datos del form
    // console.log(e.target.value)
    const { name, value } = e.target 

    // Actualizar el State
    this.setState({
      [name] : Number(value)
    })

  }

  habilitarSubmit = () => {
    // Aplicar destructuring
    const { cantidad, plazo } = this.state
    // leer las variables 
    const noValido = !cantidad || !plazo
    console.log(noValido)
    // Retornar una respuesta
    return noValido
  }


  render() { 
    const { cantidad } = this.state
    // console.log(cantidad)
    return (
      <form>
        <div>
          <label>Cantidad Prestamo: {cantidad}</label>
          <input
            onChange={this.actualizarState}
            type="number"
            name="cantidad"
            className="u-full-width"
            placeholder="Ejemplo: 3000" />
        </div>
        <div>
          <label>Plazo para pagar:</label>
          <select onChange={this.actualizarState} name="plazo" className="u-full-width">
            <option value="">Seleccionar</option>
            <option value="3">3 Meses</option>
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="24">24 Meses</option>
          </select>
        </div>
        <div>
          <input 
            disabled={this.habilitarSubmit()}
            type="submit"
            value="calcular"
            className="u-full-width button-primary" />
        </div>
      </form>
    );
  }
}
 
export default Form;
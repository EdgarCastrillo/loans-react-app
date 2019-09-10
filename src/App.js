import React, { Component, Fragment} from 'react';

import './normalize.css';
import './skeleton.css'

import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Calcular prestamo</h1>
        <div className="container">
          <Form />
        </div>
      </Fragment>
    );
  }
}

export default App;

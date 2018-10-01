import React, { Component } from 'react';
import Home from './components/home';

class App extends Component {
  state = {
    toDos: []
  };

  render() {
    return (
      <div className="container">
        <Home toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;

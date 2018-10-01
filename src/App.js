import React, { Component } from 'react';
import Home from './pages/home';

class App extends Component {
  state = {
    toDos: []
  };

  addToDo = (event, toDo) => {
    const newToDo = {
      id: Math.random(),
      title: toDo
    };
    this.setState(() => ({
      toDos: [...this.state.toDos, newToDo]
    }));
  };

  render() {
    return (
      <div className="container">
        <Home toDos={this.state.toDos} addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;

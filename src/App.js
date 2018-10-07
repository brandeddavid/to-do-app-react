import React, { Component } from 'react';
import Home from './pages/home';

class App extends Component {
  state = {
    toDos: [],
    showInputField: false
  };

  addToDo = toDo => {
    const newToDo = {
      id: Math.random(),
      title: toDo,
      complete: false
    };
    this.setState(() => ({
      toDos: [...this.state.toDos, newToDo]
    }));
  };

  deleteToDo = id => {
    const toDos = this.state.toDos.filter(toDo => {
      return toDo.id !== id;
    });
    this.setState({ toDos });
  };

  toggleShowInputField = event => {
    event.preventDefault();
    this.setState(() => ({
      showInputField: !this.state.showInputField
    }));
  };

  render() {
    return (
      <div className="container">
        <Home
          toDos={this.state.toDos}
          addToDo={this.addToDo}
          deleteToDo={this.deleteToDo}
          showInputField={this.state.showInputField}
          toggleShowInputField={this.toggleShowInputField}
        />
      </div>
    );
  }
}

export default App;

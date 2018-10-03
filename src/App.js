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
      title: toDo
    };
    this.setState(() => ({
      toDos: [...this.state.toDos, newToDo],
      showInputField: false
    }));
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
          showInputField={this.state.showInputField}
          toggleShowInputField={this.toggleShowInputField}
        />
      </div>
    );
  }
}

export default App;

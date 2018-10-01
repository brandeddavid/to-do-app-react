import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleAdd = event => {
      event.preventDefault()
      this.props.addToDo(this.state.todo)
      this.setState(() => ({
          todo: ''
      }))
  }


  render() {
    return (
      <React.Fragment>
        <div className="input-field">
          <Label for="todo">
            <h2>Enter To Do</h2>
          </Label>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter New To-Do"
            value={this.state.todo}
            onChange={this.handleChange}
          />
        </div>
        <Button
          color="success"
          onClick={event => this.handleAdd(event, this.state.todo)}
        >
          {' '}
          Add{' '}
        </Button>
      </React.Fragment>
    );
  }
}

export default NewToDo;

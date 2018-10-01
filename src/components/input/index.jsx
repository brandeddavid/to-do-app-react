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

  render() {
    return (
      <React.Fragment>
        <div className="input-field">
          <Label for="todo">Enter To Do</Label>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter New To-Do"
            value={this.state.todo}
            onChange={this.handleChange}
          />
        </div>
        <Button color="success"> Add ToDo </Button>
      </React.Fragment>
    );
  }
}

export default NewToDo;

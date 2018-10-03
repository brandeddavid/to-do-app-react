import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class NewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      error: null
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAdd = (event, toDo) => {
    if (toDo.length === 0) {
      this.setState(() => ({
        error: 'Cannot submit an empty todo'
      }));
    } else {
      this.props.addToDo(this.state.todo);
      this.setState(() => ({
        todo: '',
        error: null
      }));
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.error ? (
          <div>{this.state.error}</div>
        ) : (
          <div className="input-field">
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Enter New To-Do"
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </div>
        )}
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

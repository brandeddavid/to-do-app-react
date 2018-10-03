import React, { Component } from 'react';
import { Button } from 'reactstrap';

// components
import Display from '../../components/display';
import NewToDo from '../../components/input';

class Home extends Component {
  render() {
    const { toDos, showInputField } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4">
            <h2>All To Dos</h2>
            {toDos.length === 0 ? (
              <p>Nothing planned for now</p>
            ) : (
              toDos.map(toDo => {
                return <Display toDo={toDo} key={toDo.id} />;
              })
            )}
          </div>
          <div className="col-md-4">
            <h2>Enter To Do</h2>
            {showInputField ? (
              <NewToDo addToDo={this.props.addToDo} />
            ) : (
              <Button
                color="success"
                onClick={event => this.props.toggleShowInputField(event)}
              >
                New ToDo
              </Button>
            )}
          </div>
          <div className="col-md-4">
            <h2>Completed</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

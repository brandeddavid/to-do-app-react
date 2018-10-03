import React, { Component } from 'react';

// components
import Display from '../../components/display';
import NewToDo from '../../components/input';

class Home extends Component {
  render() {
    const { toDos, deleteToDo } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4">
            <hr />
            <h2 className="text-center">All To Dos</h2>
            <hr />
            <Display toDos={toDos} deleteToDo={deleteToDo}/>
          </div>
          <div className="col-md-4">
            <hr />
            <h2 className="text-center">Enter To Do</h2>
            <hr />
            <NewToDo addToDo={this.props.addToDo} />
          </div>
          <div className="col-md-4">
            <hr />
            <h2 className="text-center">Completed</h2>
            <hr />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

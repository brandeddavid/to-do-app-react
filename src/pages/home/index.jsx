import React, { Component } from 'react';

// components
import Display from '../../components/display';
import NewToDo from '../../components/input';

class Home extends Component {
  render() {
    const { toDos } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4">
            <h2>All To Dos</h2>
            {toDos.length === 0 ? (
              <p>Nothing planned for now</p>
            ) : (
              toDos.map(toDo => {
                return <Display toDo={toDo} />;
              })
            )}
          </div>
          <div className="col-md-4">
            <NewToDo />
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

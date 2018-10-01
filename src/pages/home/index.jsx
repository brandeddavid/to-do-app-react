import React, { Component } from 'react';

// components
import Display from '../../components/display';
import NewToDo from '../../components/input';

class Home extends Component {
  render() {
    const { toDos } = this.props;
    return (
      <React.Fragment>
        {toDos.length === 0 ? (
          <div className="text-center">
            <h3>Nothing planned for now</h3>
          </div>
        ) : (
          toDos.map(toDo => {
            return <Display toDo={toDo} />;
          })
        )}
        <NewToDo />
      </React.Fragment>
    );
  }
}

export default Home;

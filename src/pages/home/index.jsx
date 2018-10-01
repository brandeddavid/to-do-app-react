import React, { Component } from 'react';
import Display from '../../components/display';

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
      </React.Fragment>
    );
  }
}

export default Home;

import React, { Component } from 'react';

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
            return <div key={toDo.id}>{toDo.title}</div>;
          })
        )}
      </React.Fragment>
    );
  }
}

export default Home;

import React from 'react';

const Display = ({ toDos }) => {
  const toDoList = toDos.length ? (
    toDos.map(toDO => {
      return (
        <div className="list-group-item" key={toDO.id}>
          {toDO.title}
        </div>
      );
    })
  ) : (
    <div className="list-group-item">Nothing planned for now</div>
  );
  return <div className="to-do list-group">{toDoList}</div>;
};

export default Display;

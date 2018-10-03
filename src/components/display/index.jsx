import React from 'react';

const Display = ({ toDo }) => {
  return (
    <div className="to-do list-group" key={toDo.id}>
      <li className="list-group-item">{toDo.title}</li>
    </div>
  );
};

export default Display;

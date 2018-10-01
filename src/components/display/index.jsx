import React from 'react';

const Display = ({ toDo }) => {
  return (
    <div className="to-do" key={toDo.id}>
      {toDo.title}
    </div>
  );
};

export default Display;

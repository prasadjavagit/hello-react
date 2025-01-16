import React, { useState } from 'react';
import { data } from './data';

const UseStateBasics = () => {
  const [people, setPeople] = useState(data);
  const removeItem = i => {
    let newPeople = people.filter(person => person.id !== i);
    console.log(newPeople);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map(item => {
        const { id, name } = item;
        return (
          <div className="row" key={id}>
            <h6 className="col-md-2">{name}</h6>
            <button
              className="btn btn-success col-md-1"
              onClick={function () {
                removeItem(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button className="btn btn-primary btn-lg" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateBasics;

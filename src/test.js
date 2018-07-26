import React, { Component } from 'react';
import ItemCard from './ItemCard/ItemCard';

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      toDos: [{
        id: 1,
        title: 'My First ToDo',
        description: 'My first toDo description'
      }, {
        id: 2,
        title: 'My Second ToDo',
        description: 'My second toDo description'
      }]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.toDos.map((toDo) => (
            <ItemCard
              key={toDo.id}
              title={toDo.title}
              description={toDo.description}
            />
          ))
        }
      </div>
    );
  }
}
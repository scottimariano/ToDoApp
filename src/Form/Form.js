import React, { Component } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './form.css';

export default class Form extends Component {
  titleInput;
  constructor() {
    super();
    this.state = { 
      title: '',
      description: ''
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault();
    this.props.handleSubmit({
      title: this.state.title,
      description: this.state.description,
    })
 
    this.setState({
      title:"",
      description: "",
    })

    this.titleInput.focus();
  };

  render() {
    return (
      <form className="toDo-form" onSubmit={this.handleSubmit}>
        <div className="toDo-creation">
          <h3>Add To-Do</h3>
          
          <input type="text" 
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange} 
            placeholder="Title" 
            ref={(el) => this.titleInput = el}
          />
      
          <input 
            type="text" 
            name="description" 
            value={this.state.description} 
            onChange={this.handleChange} 
            placeholder="Description"
          />
          
          <button type="submit"> Save </button>

        </div>
        
        <div>
          <ItemCard
            title={this.state.title}
            description={this.state.description}
            preview= {true}
          />
        </div> 
      </form>
    );
  }
}

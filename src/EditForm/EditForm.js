import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class EditForm extends Component {
    titleInput;

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
    }

    getTodoToEdit = (id) => {
        const toDoToEdit = this.props.toDos.find(toDo => toDo.id == id);

        this.setState({
            title: toDoToEdit.title,
            description: toDoToEdit.description,
        })
    };

    //   handleSubmit = (event)=> {
    //     event.preventDefault();
    //     this.props.handleSubmit({
    //       title: this.state.title,
    //       description: this.state.description,
    //     })

    //     this.setState({
    //       title:"",
    //       description: "",
    //     })

    //     this.titleInput.focus();
    //   };

    componentWillMount() {
        this.getTodoToEdit(this.props.match.params.toDoId);
    }

    componentDidMount() {
        this.titleInput.focus()
    }
    render() {

        return (
            <form className="toDo-form" onSubmit={console.log('submit')}>
                <div className="toDo-creation">
                    <h3>Edit To Do</h3>
                    <input type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Title"
                        ref={(el) => this.titleInput = el}
                    />

                    <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        placeholder="Description"
                    />

                    <button type="submit"> Edit </button>

                </div>
            </form>
        );
    }
}

export default withRouter(EditForm)
import React, { Component } from 'react';

export default class Login extends Component {
    usernameInput;
    constructor() {
        super();
        this.state = {
            username: '',
        };
    };

    handleSubmit = (event) => {
        event.preventDefault();
         this.setState({
                    username: event.target.value
                });
        this.props.handleSubmit(this.usernameInput.value);
       
    };

    render() {
        if (this.state.username === '') {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h3>INGRESE SU NOMBRE DE USUARIO</h3>
                    <input type="text"
                        name="user"
                        ref={(el) => this.usernameInput = el}
                    />
                    <button type="submit"> Ingresar </button>
                </form>
            );
        } else {
            this.props.history.push('/user')
            return null
        }
        
    }
}
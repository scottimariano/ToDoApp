import React, {Component} from 'react';
import './Avatar.css';
import { withRouter } from 'react-router-dom';

class Avatar extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.handleClick();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="avatar-box">
        <img src={this.props.url} className="avatar-img" alt='avatarimg' />
        <div className="container">
          <h4><b>{this.props.alias}</b></h4>
        </div>
        {this.props.alias !== '' &&
          <button onClick={this.handleClick}>CERRAR SESION</button>
        }

      </div>
    );
  }
}

export default withRouter(Avatar);
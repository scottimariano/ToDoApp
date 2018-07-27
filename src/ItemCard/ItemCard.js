import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemCard.css';
import ItemCardTitle from './ItemCardTitle';

export default class ItemCard extends Component {
  render() {
    return (
      <div className="ItemCard">
        <ItemCardTitle
          title={this.props.title}
          preview={this.props.preview}
        />

        <div className="ItemCardContainer">
          <span>
            {this.props.preview ? this.props.description || 'Descripcion' : this.props.description}
          </span>
        </div>
          <button className="danger" onClick={this.props.handleClickEdit}>Edit</button>

        {this.props.handleClickDelete ?
          <button className="danger" onClick={this.props.handleClickDelete}>Delete</button>
          : null}

      </div>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

ItemCard.defaultProps = {
  title: 'Item 1',
  description: 'esta es la descripción'
};
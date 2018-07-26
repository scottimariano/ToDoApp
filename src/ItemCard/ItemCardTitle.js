import React from 'react';

const ItemCardTitle = (props) => (
  <h2 className="ItemCardTitleTitle"> 
    {props.preview ? props.title || 'Titulo' : props.title}
   </h2>
);

export default ItemCardTitle;
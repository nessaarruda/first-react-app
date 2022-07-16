import React from 'react';
import './Card.css';
// it has access to description from props passed down from parent App.js
const Card = ({ title, description, id, deleteIdea}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  )
}

export default Card;
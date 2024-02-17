import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Button.css'; // Import the common button styles

const Play = ({ onClick }) => {
  return (
    <button className="custom-button play-button" onClick={onClick}>
      <FontAwesomeIcon icon={faPlay} />
    </button>
  );
};

export default Play;




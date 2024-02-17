import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Button.css'; // Import the common button styles

const Settings = ({ onClick }) => {
  return (
    <button className="custom-button next-button" onClick={onClick}>
      <FontAwesomeIcon icon={faCog} />
    </button>
  );
};

export default Settings;



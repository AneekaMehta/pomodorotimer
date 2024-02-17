import React from 'react';
import './Button.css'; // Import the common button styles

const Next = ({ onClick }) => {
  return <button className="custom-button next-button" onClick={onClick}><code>Next</code></button>;
};

export default Next;

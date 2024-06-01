// Loader.js
import React from 'react';
import '../src/loader.css'; // Create and import a CSS file for custom styles

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="bouncing-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

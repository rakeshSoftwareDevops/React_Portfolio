import React from 'react';
import '../styles/loader.css';
const Loader = () => {
    return (
      <div className="loader-container">
        <div className="gradient-loader"></div>
        <h2 className="loading-text">Loading...</h2>
      </div>
    );
};
  
export default Loader;

import React from 'react';
import { Link } from 'react-router-dom';
const OverLay = () => {
  return (
    <div className="Overlay" id="myNav">
      <div className="Overlay-content">
        <div>
          <Link to="/profile">View Account</Link>
          <Link to="/profile">Profile</Link>

        </div>
        <div className="MiniLinks">
          <Link to="#">Premium</Link>
          <Link to="#">Support</Link>
          <Link to="#">Download</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Terms</Link>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
import React from 'react';
import { Link } from 'react-router-dom';
const OverLay = () => {
  return (
    <div className="Overlay" id="myNav">
      <div className="Overlay-content">
        <div>
          <Link to="/K12Page">View Account</Link>
          <Link to="/HigherEdPage">Profile</Link>
          <Link to="/ChildrenPage">Log Out</Link>
        </div>
        <div className="MiniLinks">
          <Link to="/SignUpPage">Premium</Link>
          <Link to="/SignUpPage">Support</Link>
          <Link to="/SignUpPage">Download</Link>
          <Link to="/SignUpPage">Privacy</Link>
          <Link to="/SignUpPage">Terms</Link>
        </div>
      </div>
    </div>
  );
};

export default OverLay;

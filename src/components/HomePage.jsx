import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Survey Application</h1>
      <nav>
        <ul>
          <li><Link to="/presentation">Presentation Page</Link></li>
          <li><Link to="/centered-div">Centered Div</Link></li>
          <li><Link to="/landing">Landing Page</Link></li>
          <li><Link to="/question">Question Page</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;

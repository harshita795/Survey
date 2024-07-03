import React from 'react';
import './PresentationPage.css';

const PresentationPage = () => {
  return (
    <div className="container">
      <div className="top-box">
        <h2>Presentation</h2>
      </div>
      <div className="content">
        <div className="navigation-box">
          <ul>
            <li><a href="#link1">Link 1</a></li>
            <li><a href="#link2">Link 2</a></li>
            <li><a href="#link3">Link 3</a></li>
          </ul>
        </div>
        <div className="content-box">
          <p>This is the content area. It contains some text and links.</p>
          <p>Here is a <a href="#link4">content link</a>.</p>
          <p><a href="/">Back to HOMEPAGE</a></p>
        </div>
      </div>
    </div>
  );
};

export default PresentationPage;

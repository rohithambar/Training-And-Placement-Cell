import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-flex">
        <img src="/assets/logo.png" alt="Logo" />
        <div>
          <h1>Training and Placement Cell</h1>
          <h4>KLE Technological University</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
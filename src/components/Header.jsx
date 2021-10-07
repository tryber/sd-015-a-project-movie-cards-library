// implement Header component here
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="hero is-link">
        <div className="hero-body has-text-centered">
          <p className="title">
            Movie Cards Library
          </p>
          <p className="subtitle">
            Project by Raphael Taglialegna
          </p>
        </div>
      </header>
    );
  }
}

export default Header;

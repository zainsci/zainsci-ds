import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="nav navbar container">
        <div className="brand">DS</div>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__link active">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/colors" className="nav__link">
              Colors
            </a>
          </li>
          <li className="nav__item">
            <a href="/type" className="nav__link">
              Typography
            </a>
          </li>
          <li className="nav__item">
            <a href="/spacing" className="nav__link">
              Spacing
            </a>
          </li>
          <li className="nav__item">
            <a href="/form" className="nav__link">
              Forms
            </a>
          </li>
          <li className="nav__item">
            <a href="/docs" className="nav__link">
              Docs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

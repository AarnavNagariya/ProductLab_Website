import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  activeIndex: number;
}

function Navbar({ activeIndex }: NavbarProps) {
  return (
    <>
      <nav>
        <div />
        <div>
          <ul id="navbar">
            <li className={activeIndex === 1 ? 'active' : ''}>
              <a href="#">
                <Link to="/">Home</Link>
              </a>
              <ul className="Dropdown">
                <li>
                  <a href="#">Item1</a>
                </li>
                <li>
                  <a href="#">Item2</a>
                </li>
                <li>
                  <a href="#">Item3</a>
                </li>
                <li>
                  <a href="#">Item4</a>
                </li>
              </ul>
            </li>
            <li className={activeIndex === 2 ? 'active' : ''}>
              <a href="#">
                <Link to="/API">APIs</Link>
              </a>
            </li>
            <li className={activeIndex === 3 ? 'active' : ''}>
              <a href="#">Contribute</a>
            </li>
            <li className={activeIndex === 4 ? 'active' : ''}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

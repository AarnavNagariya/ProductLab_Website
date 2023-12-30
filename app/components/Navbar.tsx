import React from 'react';
import Link from 'next/link';
import './Navbar.css';

interface NavbarProps {
  activeIndex: number;
}

function Navbar({ activeIndex }: NavbarProps) {
  return (
    <nav>
      <div id="nav-list">
        <ul id="navbar">
          <li className={activeIndex === 1 ? 'active' : ''}>
            <Link className='nav-links' href="/">Home</Link>
            <ul className="Dropdown">
              <li>
                <Link className='nav-links' href="#">Item1</Link>
              </li>
              <li>
                <Link className='nav-links' href="#">Item2</Link>
              </li>
              <li>
                <Link className='nav-links' href="#">Item3</Link>
              </li>
              <li>
                <Link className='nav-links' href="#">Item4</Link>
              </li>
            </ul>
          </li>
          <li className={activeIndex === 2 ? 'active' : ''}>
            <Link className='nav-links' href="/tools">APIs</Link>
          </li>
          <li className={activeIndex === 3 ? 'active' : ''}>
            <Link className='nav-links' href="#">Contribute</Link>
          </li>
          <li className={activeIndex === 4 ? 'active' : ''}>
            <Link className='nav-links' href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

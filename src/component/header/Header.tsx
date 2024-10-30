import React, { useState, useEffect } from 'react';
import './head.css';
import {Link} from 'react-scroll';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  const [sticky, setStick] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setStick(true) : setStick(false)
    })
  },[]);

  return (
    <div className={`header ${sticky? 'dark-nav' : ''}`}>
      <div className="main">
        <button className="mainbtn">Kgaugelo.dev</button>
      </div>
      <div className="mainNav">
        <button className="innerNav">
          <Link />
        </button>
        <button className="innerNav">About Me</button>
        <button className="innerNav">Projects</button>
        <button className="innerNav">Contact Me</button>
      </div>

      <div className="right-section">
        <div 
          className={`menu-button ${showMenu ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className={`menu-button_burger ${showMenu ? 'open' : ''}`}></span>
        </div>
        <nav className={`nav ${showMenu ? 'open' : ''}`}>
          <ul className={`menu-nav ${showMenu ? 'open' : ''}`}>
            <li className="menu-nav_item">
              <a href="menu-ds/project/p.html" className="menu-nav_link">
                <button className="patcw js-projects">Tech Stack</button>
              </a>
            </li>
            <li className="menu-nav_item">
              <a href="menu-ds/About me/a.html" className="menu-nav_link">
                <button className="patcw">About Me</button>
              </a>
            </li>
            <li className="menu-nav_item">
              <a href="menu-ds/Contact me/c.html" className="menu-nav_link">
                <button className="patcw">Projects</button>
              </a>
            </li>
            <li className="menu-nav_item">
              <a href="menu-ds/whats new/w.html" className="menu-nav_link">
                <button className="patcw">Contact Me</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

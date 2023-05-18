import React, { useState } from 'react';
import { Link } from "react-scroll";
import '../Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <ul className={`menu__list ${isOpen ? 'menu__list--open' : 'hide'}`}>
        <Link className="menu__item" duration={2000} smooth={true} to='about-me'>About</Link>
        <Link className="menu__item" duration={2000} smooth={true} to='projects'>Projects</Link>
        <Link className="menu__item" duration={2000} smooth={true} to='prices'>Prices</Link>
        <Link className="menu__item" duration={2000} smooth={true} to='contact'>Contact</Link>
      </ul>
      <div className="menu__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Menu;
import React from 'react'
import Menu from './Menu'
import { Link } from "react-scroll";
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo'/>
        <ul>
            <Link className='li' to='about-me' duration={1000} smooth={true}>About</Link>
            <Link className='li' to='projects' duration={1000} smooth={true}>Projects</Link>
            <Link className='li' to='prices' duration={1000} smooth={true}>Prices</Link>
            <Link className='li' to='contact' duration={1000} smooth={true}>Contact</Link>
        </ul>
        <Menu />
    </div>
  )
}

export default Header
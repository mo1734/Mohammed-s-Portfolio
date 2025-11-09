import React from 'react';
import './Nav.css';
import { MdLight } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className=' custom-nav'>
        <ul className='navbar-nav flex-row d-flex justify-content-around align-items-center p-3 custom-ul-glow'>
          <li className='nav-item custom-link'><NavLink className='nav-link text-white' to={'/'}>Home</NavLink></li>
          <li className='nav-item custom-link'><NavLink className='nav-link text-white' to={'About'}>About</NavLink></li>
          <li className='nav-item custom-link'><NavLink className='nav-link text-white' to={'SkillsAndCertificates'}>Certificates</NavLink></li>
          <li className='nav-item custom-link'><NavLink className='nav-link text-white' to={'Projects'}>Projects</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
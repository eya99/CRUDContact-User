import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {




  

  return (
    <>
      <nav className=' container-fluid navbar'>
        <div className='navbar-container'>
         
         
          <ul className=' nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links' >
              مشتركين
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
              >
              متواصلون
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
              >
              برامج
              </Link>
            </li>

           
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
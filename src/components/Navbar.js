import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/image/Logo_black-01.png'alt="logo" width="120" height="60" /> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SocialWork
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/socialmedia'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class='fab fa-discord' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/socialmedia'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class='fab fa-twitter-square' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Roadmap
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Connect Wallet
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>ConnectWallet</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

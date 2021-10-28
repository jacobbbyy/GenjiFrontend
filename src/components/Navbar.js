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
            <img src='/image/logo111.png'alt="logo" width="90" height="50" /> 
            GENJI
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li>
              <Link
                to='/services'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                SocialWork
              </Link>
            </li>

            <li>
              <Link
                to='/socialmedia'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                 <i class='fab fa-twitter-square' />
              </Link>
            </li>

            <li>
              <Link
                to='/products'
                className='nav-links-mobile'
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
          {button && <Button buttonStyle='btn--outline'>  SocialWork </Button>}
          {button && <Button buttonStyle='btn--outline'>  <i class='fab fa-discord' /> </Button>}
          {button && <Button buttonStyle='btn--outline'>  <i class='fab fa-twitter-square' /> </Button>}
          {button && <Button buttonStyle='btn--outline'>Roadmap</Button>}
          {button && <Button buttonStyle='btn--outline'>ConnectWallet</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

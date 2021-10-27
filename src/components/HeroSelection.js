import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSelection.css';

function HeroSelection() {
  return (
    <div className='hero-container'>
      <img src='/image/img-15.jpg'alt="Mascot" width="2000" height="1000" />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSelection;

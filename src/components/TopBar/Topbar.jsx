import React from 'react';
import './Topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen ? 'active' : '')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Genius.
          </a>
          <div className='itemContainer'>
            <div className='icon'>
              <Person></Person>
              <span>9914262134</span>
            </div>
          </div>
          <div className='itemContainer'>
            <div className='icon'>
              <Mail></Mail>
              <span>sukhmansindhipb05@gmail.com</span>
            </div>
          </div>
        </div>
        <div className='right'>
          <div onClick={() => setMenuOpen(!menuOpen)} className='hamburger'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen ? 'active' : '')}>
      <ul>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href='#intro'>Home</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href='#portfolio'>PortFolio</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href='#works'>Works</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href='#testimonial'>Testimonials</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

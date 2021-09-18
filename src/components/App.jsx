import React, { useState } from 'react';
import TopBar from './TopBar/Topbar';
import Intro from './intro/Intro';
import Works from './works/Works';
import Portfolio from './portfolio/Portfolio';
import Testmonial from './testimonials/Testimonial';
import './app.scss';
import Contact from './contact/contact';
import Menu from './menu/menu.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='section'>
        <Intro />
        <Portfolio />
        <Works />
        <Testmonial />
        <Contact />
      </div>
    </div>
  );
}
export default App;

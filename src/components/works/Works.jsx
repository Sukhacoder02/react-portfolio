import React, { useState } from 'react';
import './Works.scss';
import data from './worksData';

export default function Works() {
  const [currSlide,setCurrSlide] = useState(0);

  function handleClick(clicked) {
    clicked === 'left' ? setCurrSlide(currSlide > 0 ? currSlide-1 : 2) : setCurrSlide(currSlide < data.length-1 ? currSlide+1 :0);
  }
  return (
    <div className='works' id='works'>
      <div className='slider' style={{transform:`translateX(-${currSlide*100}vw)`}}>
        {data.map((d) => {
          return (
          <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src={d.icon} alt='' />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className='right'>
              <img
                src={d.img}
                alt=''
              />
            </div>
          </div>
        </div>
        )})}
      </div>
      <img src='assets/arrow.png' className='arrow left' alt='' onClick={()=>handleClick("left")} />
      <img src='assets/arrow.png' className='arrow right' alt='' onClick={()=>handleClick("right")} />
    </div>
  );
}

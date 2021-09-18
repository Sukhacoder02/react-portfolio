import React from 'react';
import './Works.scss';
import data from './worksData';

export default function Works() {
  return (
    <div className='works' id='works'>
      <div className='slider'>
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src='assets/mobile.png' alt='' />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias fuga excepturi esse assumenda quibusdam veritatis
                  quidem, iure rem eaque distinctio quia, sint obcaecati
                  perspiciatis qui omnis ex ipsa quas ab?
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className='right'>
              <img
                src='https://www.manageinbound.com/hubfs/Manage_Inbound/Blog_Images/careatc-vawa-2018.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <img src='assets/arrow.png' className='arrow left' alt='' />
      <img src='assets/arrow.png' className='arrow right' alt='' />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import List from './list';
import PortfolioList from '../PortfolioList/PortfolioList';
import * as options from './../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(options.featuredPortfolio);
        break;
      case 'web':
        setData(options.webPortfolio);
        break;
      case 'mobile':
        setData(options.mobilePortfolio);
        break;
      case 'design':
        setData(options.designPortfolio);
        break;
      case 'content':
        setData(options.contentPortfolio);
        break;
      default:
        break;
    }
  }, [selected]);
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {List.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              setData={setData}
            />
          );
        })}
      </ul>
      <div className='container'>
        {data.map((d) => {
          return (
            <div className='item'>
              <img src={d.img} alt='' />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from 'react';
import './HomePage.css';
import Animate from '../animations/LotiLogo';

const HomePage = () => {
  const items = Array.from({ length: 6 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className="outer-container">
      <div className="homepage">
        <div className="header">
          {/* <div className="logo-container"> */}
            {/* <Animate /> */}
            <div className='logo'>
              <div className='logo-item1'></div>
              <div className='logo-item2'></div>
            </div>
          {/* </div> */}
          <div className='header-bar'>
              <div className='header-bar-item1'></div>
              <div className='header-bar-item2'></div>
              <div className='header-bar-item3'></div>
              <div className='header-bar-item4'></div>
              <div className='header-bar-item5'></div>
              <div className='header-bar-item6'></div>
          </div>
        </div>
        <div className="main-container">
        <div className='sidebar-container'>
        <div className="sidebar">
            <div className='sidebar-item1'></div>
            <div className='sidebar-item2'></div>
            <div className='sidebar-item3'></div>
            <div className='sidebar-item4'></div>
            <div className='sidebar-item5'></div>
            <div className='sidebar-item6'></div>
            <div className='sidebar-item7'></div>
            <div className='sidebar-item8'></div>
  
            
          </div>
        </div>
          <div className="content">
              <div className="content-first-row">
                  <div className="content-first-row-first-col"></div>
                  <div className="content-first-row-second-col"></div>
              </div>
              <div
              className='content-second-row'>                  
                  <div className='content-second-row-title'></div>
                  <div className='content-second-row-content'>
                  <div className="grid-container">
                        {items.map((item, index) => (
                          <div key={index} className="grid-item">
                            {item}
                            <div className='grid-item-content'>
                              {item}
                            </div>
                            <div className='grid-item-content'>
                              {item}
                            </div><div className='grid-item-content'>
                              {item}
                            </div><div className='grid-item-content'>
                              {item}
                            </div><div className='grid-item-content'>
                              {item}
                            </div>
                          </div>
                          
                        ))}
                  </div>
                  </div>
              </div>
              <div
              className='content-third-row'>

              </div><div
              className='content-forth-row'>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
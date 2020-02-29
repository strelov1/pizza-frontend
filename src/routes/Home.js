import React from 'react';

import Catalog from '../components/Catalog'
import { Carousel } from 'element-react';


const Home = () => {
  return (
    <div className="content">
       <div className="medium">
        <Carousel interval="5000" arrow="always">
          {
            [1,2,3].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <img src="https://img1.wsimg.com/isteam/stock/2999" className="image" alt="pizza"/>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
        </div>
        
        <Catalog/>
    </div>
  )
}

export default Home;

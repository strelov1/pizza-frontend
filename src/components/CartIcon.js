import React, { useState, useEffect } from 'react';

import { Loading, Badge } from 'element-react';
import { getCount } from '../Api'

export const CartIcon = () => {

  const [isLoading, setLoading] = useState(true);
  const [count, loadCount] = useState(0);

  useEffect(() => {

    getCount().then((data) => {
        loadCount(data.count);
        setLoading(false)
    });
 
  }, []);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className="cart">
        <Badge value={ count } className="cart_badge">
            <img src="/img/cart.svg" alt="cart" className="cart_img"/>
         </Badge>
    </div>
  )
}
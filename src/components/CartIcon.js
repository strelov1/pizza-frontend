import React, { useState, useEffect } from 'react';

import { Loading, Badge } from 'element-react';
import { getCount } from '../Api'
import { useGlobalState, useGlobalDispatch } from '../GlabalStateProvider'

export const CartIcon = () => {

  const [isLoading, setLoading] = useState(true);
  const dispatch = useGlobalDispatch()
  const { count } = useGlobalState();

  useEffect(() => {
    getCount().then((data) => {
        dispatch({type: 'set', count: data.count})
        setLoading(false)
    }).catch((error) => {
        console.log('getCount:', error)
        dispatch({type: 'addFlash', flash: [{title: "Server Error", type: "error"}]})
        setLoading(false);
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
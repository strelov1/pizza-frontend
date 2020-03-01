import React, { useState, useEffect } from 'react';

import { Loading, Badge } from 'element-react';
import { getCount } from '../Api'
import { useGlobalState, useGlobalDispatch } from '../GlabalStateProvider'

export const CartIcon = () => {

  const [isLoading, setLoading] = useState(true);
  const dispatch = useGlobalDispatch()
  const { count } = useGlobalState();

  useEffect(() => {
    getCount().then((response) => {
        dispatch({type: 'setCount', count: response.data.count})
        setLoading(false)
    }).catch((error) => {
        setLoading(false);
        const message = error.response ? error.response.data.error.message : "Server Error";
        dispatch({type: 'addFlash', flash: [{title: message, type: "error"}]})
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
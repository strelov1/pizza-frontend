import React from 'react';
import { Card, Button, Tag } from 'element-react';
import { addCart } from '../Api'

import { useGlobalDispatch, useGlobalState } from '../GlabalStateProvider'


const Product = ({product}) => {
 
  const dispatch = useGlobalDispatch();
  const { currency } = useGlobalState();

  const addCartClick = () => {
    return addCart(product.id, 1).then((response) => {
      dispatch({type: 'setCount', count: response.data.count});
    }).catch((error) => {
      const message = error.response.data.error.message ?? "Server Error";
      dispatch({type: 'addFlash', flash: [{title: message, type: "error"}]})
    });
  }

  return (
    <Card bodyStyle={{ padding: 20}} id={product.id}>
      <img src={product.image} className="image" alt="pizza" />
        <div className="bottom clearfix product_cart_inner">
          <h3>{product.name}</h3>

              <Button plain={true} type="info" onClick={addCartClick}>
                Add Card
              </Button>
            <Tag className="price" type="gray">
              {
                currency === 'EUR' ?
                <span>€ {product.price.eur}</span>  :
                <span>$ {product.price.usd}</span>
              }
             </Tag>
        </div>
    </Card>
  );
}

export default Product;

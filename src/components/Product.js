import React from 'react';
import { Card, Button, Tag } from 'element-react';
import { addCart } from '../Api'

import { useGlobalDispatch } from '../GlabalStateProvider'


const Product = ({product}) => {
 
  const dispatch = useGlobalDispatch()

  const addCartClick = () => {
    return addCart(product.id, 1).then((data) => {
      dispatch({type: 'set', count: data.count});
    }).catch((error) => {
      dispatch({type: 'addFlash', flash: [{title: "Server Error", type: "error"}]})
    });
  }

  return (
    <Card bodyStyle={{ padding: 20}} id={product.id}>
      <img src={product.image} className="image" alt="pizza" />
        <div className="bottom clearfix product_cart_inner">
          <h3>{product.name}</h3>
          <div className="bottom">
            </div>

              <Button plain={true} type="info" onClick={addCartClick}>
                Add Card
              </Button>

            <span className="space"></span>
            <Tag type="gray">$10</Tag>
        </div>
    </Card>
  );
}

export default Product;

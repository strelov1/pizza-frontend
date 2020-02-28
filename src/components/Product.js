import React from 'react';
import { Card, Button, Tag } from 'element-react';
import { addCart } from '../Api'

import { useGlobalDispatch } from '../GlabalStateProvider'


const Product = ({product}) => {
 
  const dispatch = useGlobalDispatch()

  const addCartClick = () => {
    return addCart(product.id).then((data) => {
      dispatch({type: 'set', count: data.count});
    }).catch((error) => {
      dispatch({type: 'addFlash', flash: [{title: "Server Error", type: "error"}]})
    });
  }

  return (
    <Card bodyStyle={{ padding: 10}} id={product.id}>
      <img src={"https://img1.wsimg.com/isteam/stock/2999"} className="image" alt="pizza" />
      <div>
        <div className="bottom clearfix">

        <h3>Pizza {product.name}</h3>
        <div className="bottom clearfix">
          </div>

            <Button plain={true} type="info" onClick={addCartClick}>
              Add Card
            </Button>

          <span className="space"></span>
          <Tag type="gray">$10</Tag>
        </div>
      </div>
    </Card>
  );
}

export default Product;

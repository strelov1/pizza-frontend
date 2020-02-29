import React, { useState, useEffect } from 'react';

import { Layout, Loading, Card, InputNumber, Button } from 'element-react';
import { getCartContent, updateCart } from '../Api'
import { useGlobalDispatch, useGlobalState } from '../GlabalStateProvider'


const CartContent = () => {

  const [isLoading, setLoading] = useState(true);
  const [products, loadProducts] = useState([]);
  const dispatch = useGlobalDispatch()
  const { currency } = useGlobalState();

  useEffect(() => {
    getCartContent().then((response) => {
      loadProducts(response.data);
      setLoading(false);
    }).catch((error) => {
      console.log('getCartContent:', error);
      dispatch({type: 'addFlash', flash: [{title: "Server Error", type: "error"}]});
      setLoading(false);
    });
    
  }, [isLoading]);


  const updateOrder = (productId, count) => {
    setLoading(true);

    return updateCart(productId, count).then((data) => {
      dispatch({type: 'set', count: data.count});
      setLoading(false);
    }).catch((error) => {
      dispatch({type: 'addFlash', flash: [{title: "Server Error", type: "error"}]})
      setLoading(false);
    });
  };

  return (
    <div className="catalog">
        <Layout.Row>
            {isLoading ? <Loading/> : products.map((product) => {
                return (
                <Layout.Col style={{padding: 20}} key={product.id}>
                    <Card bodyStyle={{ padding: 20}} >

                      <Layout.Row gutter="12">
                        <Layout.Col span="6">
                          <img src={product.image} className="image" alt="pizza" />
                        </Layout.Col>

                        <Layout.Col span="6">
                          <div className="bottom clearfix">
                            <h3>{product.name}</h3>
                            <div className="bottom clearfix">
                              <Button.Group>

                               <Button type="danger" plain={true} icon="delete" onClick={(count) => {
                                    updateOrder(product.id, 0);
                                }}/>
                                <InputNumber defaultValue={product.count} value={product.count} min="0" max="10" onChange={(count) => {
                                    updateOrder(product.id, count);
                                }}/>
                                
                              </Button.Group>
                            </div>
                            <div className="bottom clearfix">
                              <h4>
                              Price: {
                                currency === 'EUR' ?
                                <span>€ {product.price.eur * product.count}</span>  :
                                <span>$ {product.price.usd * product.count}</span>
                              }
                              </h4>
                            </div>
                          </div>
                        </Layout.Col>
                        
                        <Layout.Col span="6">
                          <div className="bottom clearfix">
                          </div>
                        </Layout.Col>

                      </Layout.Row>
                      
                    </Card>
                </Layout.Col>
                )
            })}
        </Layout.Row>
    </div>
  )
}

export default CartContent;

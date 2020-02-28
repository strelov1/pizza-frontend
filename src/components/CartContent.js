import React, { useState, useEffect } from 'react';

import { Layout, Loading, Card, Tag, InputNumber } from 'element-react';
import { getCartContent } from '../Api'


const CartContent = () => {

  const [isLoading, setLoading] = useState(true);
  const [products, loadProducts] = useState([]);

  useEffect(() => {

    getCartContent().then((data) => {
      console.log(data)
      loadProducts(data);
      setLoading(false)
    });
 
  }, []);

  if (isLoading) {
    return <Loading fullscreen={true}/>
  }

  return (
    <div className="catalog">
        <Layout.Row>
            {products.map((product) => {
                return (
                <Layout.Col style={{padding: 20}} key={product.id}>
                    <Card bodyStyle={{ padding: 20}} >

                      <Layout.Row gutter="12">
                        <Layout.Col span="6">
                          <img src={"https://img1.wsimg.com/isteam/stock/2999"} className="image" alt="pizza" />
                        </Layout.Col>

                        <Layout.Col span="6">
                          <div className="bottom clearfix">
                            <h3>Pizza {product.name}</h3>
                            <div className="bottom clearfix">
                              <InputNumber defaultValue={1} min="0" max="10"/>
                            </div>
                            <div className="bottom clearfix">
                              <h4>Price: $10</h4>
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

import React, { useState, useEffect } from 'react';

import { Layout, Loading } from 'element-react';
import { getCatalog } from '../Api'
import Product from './Product'


const Catalog = () => {

  const [isLoading, setLoading] = useState(true);
  const [products, loadProducts] = useState([]);

  useEffect(() => {

    getCatalog().then((response) => {
      loadProducts(response.data);
      setLoading(false)
    });
 
  }, []);

  if (isLoading) {
    return <Loading fullscreen={true}/>
  }

  return (
    <div className="catalog">
        <Layout.Row gutter="10">
            {products.map((product) => {
                return (
                <Layout.Col span="6" style={{padding: 20}} key={product.id}>
                    <Product product={product}/>
                </Layout.Col>
                )
            })}
        </Layout.Row>
    </div>
  )
}

export default Catalog;

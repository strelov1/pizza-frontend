import React from 'react';

import { Layout } from 'element-react';
import Product from './Product'

const Catalog = () => {
  return (
    <div className="catalog">
        <Layout.Row gutter="10">
            {[0,1,2,3,5,6,7,8].map(() => {
                return (
                <Layout.Col span="6" style={{padding: 20}}>
                    <Product/>
                </Layout.Col>
                )
            })}
        </Layout.Row>
    </div>
  )
}

export default Catalog;

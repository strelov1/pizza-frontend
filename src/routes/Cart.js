import React from 'react';

import { Layout, Card, Button } from 'element-react';
import CartContent from '../components/CartContent'

const Cart = () => {
  return (
    <div className="content">
      <Layout.Row gutter="10">
        <Card
            className="box-card"
            header={
              <div className="clearfix">
                <span style={{ "lineHeight": "36px" }}>Products Cart</span>
                <span style={{ "float": "right" }}>
                  <Button type="primary">Create Order</Button>
                </span>
              </div>
            }
          >
            <CartContent/>
          </Card>
      </Layout.Row>
    </div>
  )
}

export default Cart;

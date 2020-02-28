import React from 'react';

import { Layout, Card, Button, Steps } from 'element-react';
import CartContent from '../components/CartContent'

const Cart = () => {
  return (
    <div className="content">
      <Layout.Row>
        <Card
            className="box-card"
            header={
              <div className="clearfix">
                <Layout.Row gutter="10">
                <Layout.Col span="20">
                  <Steps space={200} active={1}>
                    <Steps.Step title="Cart" description="Choose quantity"></Steps.Step>
                    <Steps.Step title="Order" description="Checkout"></Steps.Step>
                    <Steps.Step title="Accepted" description="Accepted"></Steps.Step>
                  </Steps>
                  </Layout.Col>
                <Layout.Col span="20"> 
                <span style={{ "float": "right" }}>
                  <Button type="primary">Apply Order</Button>
                </span>
                </Layout.Col>
                </Layout.Row>
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

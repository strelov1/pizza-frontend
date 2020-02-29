import React from 'react';

import { Layout, Card, Button, Steps } from 'element-react';
import { Link } from 'react-router-dom';
import CartContent from '../components/CartContent'

const Cart = () => {
  return (
    <div className="content">
      <Layout.Row>
        <Card
            className="box-card"
            header={
              <div className="clearfix">
                <Layout.Row gutter="20">
                  <Layout.Col span="18">
                    <Steps space={200} active={1} style={{padding: 20}}>
                      <Steps.Step title="Cart" description="Choose quantity"></Steps.Step>
                      <Steps.Step title="Order" description="Checkout"></Steps.Step>
                      <Steps.Step title="Accepted" description="Accepted"></Steps.Step>
                    </Steps>
                  </Layout.Col>

                  <Layout.Col span="6" style={{ "float": "right", padding: 20 }}> 
                    <div>
                      <Link to="/order">
                        <Button size="large" type="primary">Apply Order</Button>
                      </Link>
                    </div>
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

import React from 'react';

import { Layout, Card, Steps } from 'element-react';
import {OrderForm} from '../components/OrderForm'

const Order = () => {
  return (
    <div className="content">
        <Layout.Row>
        <Card
            className="box-card"
            header={
              <div className="clearfix">
                <Layout.Row gutter="10">
                <Layout.Col span="20">
                  <Steps space={200} active={2}>
                    <Steps.Step title="Cart" description="Choose quantity"></Steps.Step>
                    <Steps.Step title="Order" description="Checkout"></Steps.Step>
                    <Steps.Step title="Accepted" description="Accepted"></Steps.Step>
                  </Steps>
                  </Layout.Col>
                </Layout.Row>
              </div>
            }
          >

          <div className="oder_card">
            <OrderForm/>
          </div>

          </Card>
      </Layout.Row>
    </div>
  )
}

export default Order;

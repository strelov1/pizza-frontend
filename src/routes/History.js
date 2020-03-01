import React from 'react';

import { Layout, Card } from 'element-react';
import HistoryContent from '../components/HistoryContent'

const History = () => {
  return (
    <div className="content">
      <Layout.Row>

      <Card
            className="box-card"
            header={
              <div className="clearfix">
                  <h2>Order History</h2>
              </div>
            }
          >
            <HistoryContent/>
          </Card>

      </Layout.Row>
    </div>
  )
}

export default History;

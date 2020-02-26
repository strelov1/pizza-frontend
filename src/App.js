import React from 'react';
import './App.css';
import 'element-theme-default';

import { Card, Layout, Button, Menu } from 'element-react';

const Product = () => {
  return (
    <Layout.Col span="6" style={{padding: 20}}>
    <Card bodyStyle={{ padding: 0}}>
      <img width={300} src={"https://img1.wsimg.com/isteam/stock/2999"} className="image" />
      <div style={{ padding: 10 }}>
        <div className="bottom clearfix">
          <h3>Pizza</h3>
          <Button plain={true} type="info">Add Card</Button>
        </div>
      </div>
    </Card>
  </Layout.Col>
  );
}


function App() {
  return (
    <div className="App">

      <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
        <Menu.Item index="1">Hottest Pizza Test</Menu.Item>
        <Menu.Item index="3">Orders</Menu.Item>
      </Menu>
      <div className="line"></div>

      <Layout.Row gutter="20">
        <Layout.Col span="6">
          <br/>
        </Layout.Col>
      </Layout.Row>

      <Layout.Row  style={{padding: 30}}>
        <Layout.Col>
          <Layout.Row gutter="20">
            {[0, 1,2,3,5,6,7,8].map(() => {
              return <Product/>
            })}
          </Layout.Row>

        </Layout.Col>
      </Layout.Row>
    </div>
  )
}

export default App;

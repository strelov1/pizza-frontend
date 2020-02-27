import React from 'react';

import { Card, Layout, Button } from 'element-react';

const Product = () => {
  return (
    <Card bodyStyle={{ padding: 10}}>
      <img width={220} src={"https://img1.wsimg.com/isteam/stock/2999"} className="image" />
      <div style={{ padding: 0 }}>
        <div className="bottom clearfix">
          <h3>Pizza</h3>
          <Button plain={true} type="info">Add Card</Button>
        </div>
      </div>
    </Card>
  );
}

export default Product;

import React, { useState, useEffect } from 'react';
import { Layout, Loading, Table, Card } from 'element-react';

import { useGlobalDispatch, useGlobalState } from '../GlabalStateProvider'
import { getOrdersHistory } from '../Api'


const HistoryContent = () => {

  const [isLoading, setLoading] = useState(true);
  const [orders, loadOrders] = useState([]);

  const { currency } = useGlobalState();
  const dispatch = useGlobalDispatch();

  useEffect(() => {
    getOrdersHistory().then((response) => {
      loadOrders(response.data);
      setLoading(false);
    }).catch((error) => {
      const message = error.response.data.error.message ?? "Server Error";
      dispatch({type: 'addFlash', flash: [{title: message, type: "error"}]})
      setLoading(false);
    });
  }, []);


  return (
    <div className="catalog">
        <Layout.Row>
            {isLoading ? <Loading/> : orders.map(order => {
              return <Order order={order} key={order.id} currency={currency}/>
            })}
        </Layout.Row>
    </div>
  )
}

const Order = ({order, currency}) => {

  if (! order.products) {
    return ""
  }

  const products = order.products.map(product => {
      const price = currency === 'EUR' ?
        product.price.eur :
        product.price.usd
   
      return {...product, price};
  });

  return (
    <Card bodyStyle={{ margin: 30}} >
      <h3>Order: #{order.id} from {order.created_at}</h3>

      <Table
        style={{width: '100%', marginTop: 20}}
        height={200}
        showSummary={true}
        columns={[
          {
            label: "Name",
            prop: "name",
          },
          {
            label: "Description",
            prop: "description",
          },
          {
            label: "Count",
            prop: "count",
          },
          {
            label: "Price",
            prop: "price",
          },
        ]}
        data={products}
        summaryMethod={(columns, data)=>{
          const dataList = [];
          for(var i=0; i < columns.length; i++){
            let total = 0;
            for(let j=0; j < data.length; j++){
              let value = data[j][columns[i]['property']];

              if(isNaN(value)){
                total = NaN
                break;
              }else{
                total += parseFloat(value);
              }
            }

            if ((columns[i]['property']) == 'price') {
              const mark = (currency === 'EUR') ? "€": "$";
              dataList[i] = isNaN(total) ? "" : mark + total.toFixed(2);
            } else {
              dataList[i] = isNaN(total) ? "" : total.toFixed(2);
            }
            
          }
          return dataList;
        }}
        border={true}
      />
      </Card>
  )
}

export default HistoryContent;

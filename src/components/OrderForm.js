import React from 'react';

import { Layout, Form, Button, Input, TimePicker, Radio } from 'element-react';


export class OrderForm extends React.Component {
    
    constructor(props) {
        super(props);
      
        this.state = {
          form: {
            name: '',
            phone_number: '',
            street: '',
            house: '',
            flat: '',
            flour: '',
            delivery_time: '',
            payment_time: '',
          }
        };
      }
      
      onSubmit(e) {
        e.preventDefault();
        console.log(this.state.form);
      }
      
      onChange(key, value) {
          console.log(key, value)
        this.state.form[key] = value;
        this.forceUpdate();
      }
      
      render() {
        return (
          <Form inline={false} model={this.state.form} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>


            <Form.Item inline={true} label="Name">
                <Layout.Col span="12">
                    <Input
                        value={this.state.form.name}
                        onChange={this.onChange.bind(this, 'name')}
                    />
                    </Layout.Col>
            </Form.Item>


            <Form.Item label="Phone Number">
                <Layout.Col>
                    <Layout.Col span="21">
                            <Input value={this.state.form.phone_number} onChange={this.onChange.bind(this, 'phone_number')}/>
                    </Layout.Col>
                </Layout.Col>
            </Form.Item>



            <Form.Item label="Street">
                <Layout.Col span="11">
                        <Input value={this.state.form.street} onChange={this.onChange.bind(this, 'street')}/>
                </Layout.Col> 
                
             </Form.Item>

            

            <Form.Item label="Flat">
            <Layout.Col span="5">
                <Input value={this.state.form.flat} onChange={this.onChange.bind(this, 'flat')}/>
            </Layout.Col>
            </Form.Item>

            <Form.Item label="Flour">
            <Layout.Col span="5">
                <Input value={this.state.form.flour} onChange={this.onChange.bind(this, 'flour')}/>
            </Layout.Col>
            </Form.Item>


           

            <Form.Item label="Delivery Time">

                <Layout.Col span="16">
                        <TimePicker
                            value={this.state.form.delivery_time}
                            selectableRange="18:30:00 - 20:30:00"
                            placeholder="Pick a time"
                            onChange={this.onChange.bind(this, 'delivery_time')}
                        />
              </Layout.Col>
                    </Form.Item>

            <Layout.Col>
                <Layout.Col span="16">
                    <Form.Item label="Activity form">
                        <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
                    </Form.Item>
                </Layout.Col>
            </Layout.Col>


            <Form.Item label="Payment">
              <Radio.Group value={this.state.form.payment_time}>
                <Radio value="Cash"></Radio>
                <Radio value="Credit Card"></Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" nativeType="submit">Create</Button>
            </Form.Item>
          </Form>
        )
      }
      
}

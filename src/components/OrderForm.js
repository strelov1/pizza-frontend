import React from 'react';
import { useHistory } from 'react-router-dom'
import { Layout, Form, Button, Input, TimePicker, Radio } from 'element-react';

import { createOrder } from '../Api'
import { useGlobalDispatch } from '../GlabalStateProvider'

class OrderFormWitoutState extends React.Component {
    
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
            delivery_time: null,
            comment: '',
            payment_way: '',
          },
          errors: {}
        };

        this.onSubmit.bind(this);
      }
      
      onSubmit(e) {
        e.preventDefault();

        createOrder(this.state.form)
          .then((response) => {
            this.setState({errors: {}});
            if (response.data && response.data.status === 1) {
            
                this.props.dispatch({
                  type: 'addFlash', flash: [{title: "Order created", type: "success"}]
                });

                this.props.history.push('/');
            }
          })
          .catch(error => {
            if (error.response && error.response.status === 422) {
              const formErrors = error.response.data.errors;
              this.setState({errors: formErrors})
            }
          })
      }

      attributeError(attribute) {
        return this.state.errors[attribute];
      }
      
      onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
      }
      
      render() {
        return (
          <Form
              inline={false}
              model={this.state.form}
              labelWidth="120"
              onSubmit={this.onSubmit.bind(this)}
          >

            <Form.Item label="Name" required={true}>
                <Layout.Col span="12">
                    <Input
                        value={this.state.form.name}
                        onChange={this.onChange.bind(this, 'name')}
                    />
                    <div className="form-error">{this.attributeError('name')}</div>
                  </Layout.Col>
            </Form.Item>


            <Form.Item label="Phone Number" required={true}>
                <Layout.Col>
                    <Layout.Col span="12">
                        <Input
                          value={this.state.form.phone_number}
                          onChange={this.onChange.bind(this, 'phone_number')}
                        />
                        <div className="form-error">{this.attributeError('phone_number')}</div>
                    </Layout.Col>
                </Layout.Col>
            </Form.Item>

            <Form.Item label="Street" required={true}>
                <Layout.Col span="12">
                    <Input
                      value={this.state.form.street}
                      onChange={this.onChange.bind(this, 'street')}
                    />
                    <div className="form-error">{this.attributeError('street')}</div>
                </Layout.Col> 
             </Form.Item>

            <Form.Item inline={true} label="Flat">
                <Layout.Col span="4">
                    <Input
                      value={this.state.form.flat}
                      onChange={this.onChange.bind(this, 'flat')}
                    />
                  <div className="form-error">{this.attributeError('flat')}</div>
                </Layout.Col>
            </Form.Item>

            <Form.Item span="4" inline={true} label="Flour">
                <Layout.Col span="4">
                    <Input
                      value={this.state.form.flour}
                      onChange={this.onChange.bind(this, 'flour')}
                    />
                    <div className="form-error">{this.attributeError('flour')}</div>
                </Layout.Col>
            </Form.Item>

            <Form.Item label="Delivery Time" required={true}>
                <Layout.Col span="12">
                    <TimePicker
                        value={this.state.form.delivery_time}
                        selectableRange="09:00:00 - 24:00:00"
                        placeholder="Pick a time"
                        onChange={this.onChange.bind(this, 'delivery_time')}
                    />
                    <div className="form-error">{this.attributeError('delivery_time')}</div>
                  </Layout.Col>
            </Form.Item>

            <Form.Item label="Comment">
                <Layout.Col span="12">
                  <Input
                    type="textarea"
                    value={this.state.form.comment}
                    onChange={this.onChange.bind(this, 'comment')}
                  />
                  <div className="form-error">{this.attributeError('comment')}</div>
                </Layout.Col>
            </Form.Item>



            <Form.Item label="Payment way" required={true}>
                <Layout.Col span="12">
                  <Radio.Group
                      value={this.state.form.payment_way}
                      onChange={this.onChange.bind(this, 'payment_way')}
                  >
                    <Radio value="Cash"></Radio>
                    <Radio value="Credit Card"></Radio>
                  </Radio.Group>

                  <div className="form-error">{this.attributeError('payment_way')}</div>
                </Layout.Col>
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" nativeType="submit">
                Apply Order
              </Button>
            </Form.Item>
          </Form>
        )
      }
      
}

export const OrderForm = () => {
    const dispatch = useGlobalDispatch();
    const history = useHistory();
    return (
      <OrderFormWitoutState dispatch={dispatch} history={history}/>
    )
};
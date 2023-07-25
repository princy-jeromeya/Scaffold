import './Register.css';
import { Form, Button, Checkbox, Input, Col, Divider, Row } from 'antd';
import scaffold2 from "../images/scaffold2.jpg";
import React from 'react';
import List from '../Reuse/List';


function RegisterPage() {

  const onFinish = (values) => {
    console.log(/*'Received values:', */values);
  };

  return (
    <div className="App">
      <List/>
      <Divider orientation="center"></Divider>
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col className="left" span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img style={{ width: '550px', height: '740px', paddingTop: '70px' }} src={scaffold2}></img>
        </Col>
        <Col className="right" span={11}>
          <h2 style={{ color: 'gray', textAlign: 'center' }}>Sign Up</h2>
          <div className="form-container">
            <Form
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 14 }}
              onFinish={onFinish}
              style={{ textAlign: 'left' }}

            >
              <Form.Item
                name="firstname"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your first name',
                  },
                  {
                    min: 2,
                    message: 'First name must be at least 2 characters',
                  },
                  {
                    max: 50,
                    message: 'First name cannot exceed 50 characters',
                  },
                ]}
                className="custom-form-item"
              >
                <Input style={{ width: '300px' }} placeholder="Type your first name" />
              </Form.Item>

              <Form.Item
                name="lastname"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your last name',
                  },
                  {
                    min: 2,
                    message: 'Last name must be at least 2 characters',
                  },
                  {
                    max: 50,
                    message: 'Last name cannot exceed 50 characters',
                  },
                ]}
                className="custom-form-item"
              >
                <Input style={{ width: '300px' }} placeholder="Type your last name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email',
                  },
                ]}
                className="custom-form-item"
              >
                <Input style={{ width: '300px' }} placeholder="Type your email" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password',
                  },
                  {
                    min: 8,
                    message: 'Password must be at least 8 characters',
                  },
                  {
                    max: 20,
                    message: 'Password cannot exceed 20 characters',
                  },
                  {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
                  },
                ]}
                className="custom-form-item"
              >
                <Input.Password style={{ width: '300px' }} placeholder="Type your password" />
              </Form.Item>

              <Form.Item
                name="confirmpassword"
                label="Confirm Password"
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('The two passwords do not match')
                      );
                    },
                  }),
                ]}
                className="custom-form-item"

              >
                <Input.Password style={{ width: '300px' }} placeholder="Confirm your password" />
              </Form.Item>

              <div>
                <div className="checkbox-container">
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    wrapperCol={{ span: 24 }}
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                              new Error('Please accept the terms and conditions')
                            ),
                      },
                    ]}
                    className="custom-form-item"
                  >
                    <Checkbox>
                      Agree to our <a href="/">Terms and Conditions</a>
                    </Checkbox>
                  </Form.Item>
                </div>
              </div>

              <Form.Item wrapperCol={{ span: 14, offset: 6 }} >
                <Button style={{ width: '90%' }} block type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RegisterPage;

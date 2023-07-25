import { Button, Checkbox, Form, Input } from 'antd';
import "./Login.css";
import { Col, Divider, Row } from 'antd';
import { Link } from 'react-router-dom';
import newlog from "../images/newlog.jpg"
import List from '../Reuse/List';



const onFinish = (values) => {
  // debugger
  fetch("https://rcz-backend.onrender.com/api/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
      // Add any other headers you may need, likrpe authorization headers
    },
    body: JSON.stringify({ userName: values.username, passWord: values.password })
  })
    .then(e => e.json()).then(e => {
      localStorage.setItem("batch13", e)
    }).catch(error => { 
      debugger
    })
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
function Data() {
  return (
    <div className='App' >
      <List />
      <Divider className='divide' orientation="left"></Divider>
      <Row justify={'center'} align={'middle'}>
        <Col span={8} className='left'>
          <img src={newlog}></img>
        </Col>
        <Col span={11} className='right'>
          <div>
            <h1>Welcome to Insid-Mart</h1>
            <h3>Sign In to continue</h3>
          </div><br></br><br></br>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 500,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
                {
                  pattern: /^[a-zA-Z]+$/,
                  message: 'Username must contain only letters ',
                },
                {
                  min: 4,
                  message: 'Username must be at least 4 characters long!',
                },
              ]}
              className="custom-form-item"
            >
              <Input placeholder='Type your Name' />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters long!',
                },

                {
                  pattern: /^(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
                  message: 'Password must contain at  one lowercase letter, one number, and one special character!',
                },
              ]}
              className="custom-form-item"
            >
              <Input.Password placeholder='Type your password' />
            </Form.Item>

            <Form.Item className='remem' name="remember" valuePropName="checked" noStyle style={{ textAlign: 'center' }}>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <div style={{ marginBottom: '16px', marginTop: "16px" }}>
                Don't have an account? <Link to="/register">Create an account</Link>
              </div>
              <Button className='buttonStyle' type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
export default Data;
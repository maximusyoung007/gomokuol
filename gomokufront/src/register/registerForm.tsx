import React, {useState} from "react";
import { Form, Input, Tooltip, Select, Checkbox, Button,} from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons';
import Agreement from "./agreement";
import axios from 'axios';


const {Option} = Select;

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 8},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16},
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const RegisterForm = () => {
  const [form] = Form.useForm();
  const [isShow,setIsShow] = useState(false);

  const onFinish = (values: any) => {
    axios({
      method: 'post',
      url: 'user/register',
      data:{
        name: values.name,
        password: values.password,
        rePassword: values.rePassword,
        email: values.email,
        mobile: values.phone
      }
    }).then(function (data) {
      console.log(data);
    })
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{width: 70}}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


  function readAgreement() {
    setIsShow(true);
  }
  return (
    <div>
      <Agreement isShow={isShow} setParentState={() => setIsShow(false)}></Agreement>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: 'email',
              message: '邮箱不合法',
            },
            {
              required: true,
              message: '请输入邮箱',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
          hasFeedback
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
          name="rePassword"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请再次输入密码',
            },
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次输入的密码不相符!');
              },
            }),
          ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
          name="name"
          label={
            <span>
          用户名&nbsp;
              <Tooltip title="起一个炫酷的用户名吧！">
            <QuestionCircleOutlined/>
          </Tooltip>
        </span>
          }
          rules={[
            {required: true, message: '请输入用户名', whitespace: true}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name="phone"
          label="电话号码"
          rules={[{required: true, message: 'Please input your phone number!'}]}
        >
          <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            我已阅读该 <a href="#!" onClick={() => readAgreement()}>协议</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegisterForm;

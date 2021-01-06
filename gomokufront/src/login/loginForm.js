import React from 'react';
import {Form,Input,Button,Checkbox} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useHistory} from "react-router";
import axios from "axios";

const LoginForm = () => {
    let history = useHistory();
    const onFinish = (values) => {
        axios({
            method: 'get',
            url: 'user/test',
        }).then(function(response){
            history.push({
                pathname:"/game",
                state: {
                    username: values.username,
                }
            });
        })
    }

    return (
        <div>
            <div className={"loginTips"}>
                请登录
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                           placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="请输入密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    或者 <a href="">注册！</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginForm

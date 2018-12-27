import React,{Component} from "react";
import {Form, Input, Icon} from "antd";
import './login.less';


export default class extends Component {
    render() {
        return (
            <div id="login">
                <Form layout="horizontal" className="login-form">

                    <Form.Item>
                        <Input
                            name="username"
                            prefix={<Icon type="user" />}
                            placeholder={"Username"}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input
                            name="password"
                            type="password"
                            prefix={<Icon type="lock" />}
                            placeholder={"Password"}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input type="submit" value="Login" />
                    </Form.Item>

                </Form>
            </div>
        )
    }
}
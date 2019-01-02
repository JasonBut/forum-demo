import React from "react";
import PropTypes from "prop-types";
import {Icon,Form, Input} from "antd";

FormUI.propTypes = {
    username : PropTypes.string,
    password : PropTypes.string,
    logErr : PropTypes.string,
    handleChange : PropTypes.func.isRequired,
    handleSubmit : PropTypes.func.isRequired,
}


export default function FormUI (props) {
    const {username, password, handleChange, handleSubmit, logErr} = props;
    return (
        <Form
            layout="horizontal"
            className="login-form"
            onSubmit={handleSubmit}
        >

            <Form.Item>
                <Input
                    name="loginUsername"
                    prefix={<Icon type="user" />}
                    placeholder={"Username"}
                    value={username}
                    onChange={handleChange}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    name="loginPassword"
                    type="password"
                    prefix={<Icon type="lock" />}
                    placeholder={"Password"}
                    value={password}
                    onChange={handleChange}
                />
            </Form.Item>

            { logErr && <p className="err-message">{logErr}</p> } {/*登录错误信息*/}

            <Form.Item>
                <Input type="submit" value="Login" />
            </Form.Item>

        </Form>
    )
}
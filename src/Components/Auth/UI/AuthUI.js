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
    const {isLogin, username,nickname, password, handleChange, handleSubmit, logErr} = props;
    return (
        <Form
            layout="horizontal"
            className="login-form animated fadeIn"
            onSubmit={handleSubmit}
        >

            <Form.Item>
                <Input
                    name="loginUsername"
                    prefix={<Icon type="user" />}
                    placeholder={"请输入账号"}
                    value={username}
                    onChange={handleChange}
                />
            </Form.Item>

            {
                isLogin
                    ? null
                    : (
                        <Form.Item>
                            <Input
                                name="regNickname"
                                prefix={<Icon type="solution" />}
                                placeholder={"请输入昵称"}
                                value={nickname}
                                onChange={handleChange}
                            />
                        </Form.Item>
                    )
            }

            <Form.Item>
                <Input
                    name="loginPassword"
                    type="password"
                    prefix={<Icon type="lock" />}
                    placeholder={"请输入密码"}
                    value={password}
                    onChange={handleChange}
                />
            </Form.Item>

            { logErr && <p className="err-message">{logErr}</p> } {/*登录错误信息*/}

            <Form.Item>
                <Input type="submit" value={isLogin ? "登录" : "注册"} />
            </Form.Item>

        </Form>
    )
}
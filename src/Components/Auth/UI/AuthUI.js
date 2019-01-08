import React from "react";
import PropTypes from "prop-types";
import {Icon,Form, Input} from "antd";

FormUI.propTypes = {
    isLogin : PropTypes.bool.isRequired,
    handleSubmit : PropTypes.func.isRequired,
    getFieldDecorator : PropTypes.func.isRequired,
    logErr : PropTypes.string,
}


export default function FormUI (props) {
    const {isLogin, handleSubmit, logErr, form : {getFieldDecorator}} = props;
    return (
        <Form
            layout="horizontal"
            className="login-form animated zoomIn"
            onSubmit={handleSubmit}
        >

            <Form.Item>
                {getFieldDecorator("loginUsername",{
                    rules : [{
                        required : true,
                        message : "请输入用户忙"
                    }]
                })(
                    <Input
                        prefix={<Icon type="user" />}
                        placeholder={"请输入账号"}
                    />
                )}
            </Form.Item>

            {
                isLogin
                    ? null
                    : (
                        <Form.Item>
                            {getFieldDecorator("regNickname",{
                                rules : [{
                                    required : true,
                                    message : "请输入昵称"
                                }]
                            })(
                                <Input
                                    prefix={<Icon type="solution" />}
                                    placeholder={"请输入昵称"}
                                />
                            )}
                        </Form.Item>
                    )
            }

            <Form.Item>
                {getFieldDecorator("loginPassword",{
                    rules : [{
                        required : true,
                        message : "请输入密码",
                    }]
                })(
                    <Input
                        type="password"
                        prefix={<Icon type="lock" />}
                        placeholder={"请输入密码"}
                    />
                )}
            </Form.Item>

            { logErr && <p className="err-message">{logErr}</p> } {/*登录错误信息*/}

            <Form.Item>
                <Input type="submit" value={isLogin ? "登录" : "注册"} />
            </Form.Item>

        </Form>
    )
}
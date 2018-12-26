import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const {Header} = Layout;

export default function () {
    return (
        <Layout>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{lineHeight : '64px'}}
                >
                    <Menu.Item key="1">
                        <Link to={"/"} >首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={"/login"}>登录</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}
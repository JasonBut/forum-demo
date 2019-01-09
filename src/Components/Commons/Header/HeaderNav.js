import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {mapStates} from "../../../Redux/";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const {Header} = Layout;

const tabFilter = new Map([
    ["/",["1"]],
    ["/login",["2"]],
    ["/logout",["3"]],
    ["/register",["4"]],
]);

//根据当前路径去改变导航按键样式
const checkCurrentTab = (pathname) => {
    let currentTab;
    for (let [key,value] of tabFilter) {
        if (!pathname.endsWith(key)) {
            currentTab = [""];
        } else {
            currentTab = value;
            break
        }
    }
    return currentTab;
};

const mapState = (state) => ({
    isLogged : mapStates.getAuthIsLogged(state),
    userNickname : mapStates.getAuthNickname(state),
});

const HeaderNav = (props) => {
    const {isLogged, userNickname, location : {pathname}} = props;
    const loginButton = (
        isLogged
            ? <Menu.Item key="3" className="animated fadeIn">
                <Link to={"/logout"}>注销</Link>
            </Menu.Item>

            : <Menu.Item key="2" className="animated fadeIn">
                <Link to={"/login"}>登录</Link>
            </Menu.Item>
    );
    const registerButton = (
        isLogged
            ? null
            : <Menu.Item key="4">
                <Link to={"/register"}>注册</Link>
            </Menu.Item>
    );
    return (
        <Header className="header">
            {isLogged ? <span>欢迎，{userNickname} </span> : null}
            <Menu
                className="nav"
                theme="dark"
                defaultSelectedKeys={["1"]}
                selectedKeys={checkCurrentTab(pathname)}
                mode="horizontal"
                style={{lineHeight : '64px'}}
            >
                <Menu.Item key="1" className="animated fadeIn">
                    <Link to={"/"} >首页</Link>
                </Menu.Item>
                {loginButton}
                {registerButton}
            </Menu>
        </Header>
    )
};

HeaderNav.propTypes = {
    isLogged : PropTypes.bool,
    userNickname : PropTypes.string,
    location : PropTypes.shape({
        pathname : PropTypes.string.isRequired,
    })
};
export default withRouter(connect(mapState)(HeaderNav))
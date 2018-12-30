import React,{Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";


const {Header} = Layout;


@withRouter
class HeaderNav extends Component {
    static propTypes = {
        location : PropTypes.shape({
            pathname : PropTypes.string.isRequired,
        })
    };

    checkCurrentTab = (pathname) => {
        if (pathname === "/") {
            return ["1"]
        } else if (pathname === "/login") {
            return ["2"]
        } else {
            return [""]
        }
    };

    render() {
        return (
            <Header>
                <Menu
                    className="nav"
                    theme="dark"
                    defaultSelectedKeys={this.checkCurrentTab(this.props.location.pathname)}
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
        )
    }
}

export default HeaderNav;
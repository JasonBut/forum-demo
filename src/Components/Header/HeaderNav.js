import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {mapStates} from "../../Redux/Reducers";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";


const {Header} = Layout;

const tabFilter = new Map([
    ["/",["1"]],
    ["/login",["2"]],
    ["/logout",["3"]],
]);

const mapState = (state) => ({
    isLogged : mapStates.getAuthIsLogged(state),
    userNickname : mapStates.getAuthNickname(state),
});

@withRouter
@connect(mapState)
class HeaderNav extends Component {
    static propTypes = {
        isLogged : PropTypes.bool,
        userNickname : PropTypes.string,
        location : PropTypes.shape({
            pathname : PropTypes.string.isRequired,
        })
    };

    //根据当前路径去改变导航按键样式
    checkCurrentTab = (pathname) => {
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

    render() {
        const {isLogged, userNickname, location : {pathname}} = this.props;
        return (
            <Header className="header">
                {isLogged ? <span>欢迎，{userNickname} </span> : null}
                <Menu
                    className="nav"
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    selectedKeys={this.checkCurrentTab(pathname)}
                    mode="horizontal"
                    style={{lineHeight : '64px'}}
                >
                    <Menu.Item key="1">
                        <Link to={"/"} >首页</Link>
                    </Menu.Item>
                    {
                        isLogged
                            ? <Menu.Item key="3">
                                <Link to={"/logout"}>注销</Link>
                              </Menu.Item>

                            : <Menu.Item key="2">
                                <Link to={"/login"}>登录</Link>

                              </Menu.Item>
                    }
                </Menu>
            </Header>
        )
    }
}

export default HeaderNav;
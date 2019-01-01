import React,{Component} from "react";
import {connect} from "react-redux";
import {mapDispatches} from "../../../../Redux/Reducers";
import LogoutUI from "../UI/LogoutUI";


const mapDispatch = {
    logout : mapDispatches.authLogout,
};

@connect(null,mapDispatch)
class Index extends Component{

    componentDidMount () {
        this.props.logout(); //发送注销请求
        this.timer = setTimeout(() => {  //注销成功后返回上一页
            window.history.go(-1);
        },2000)
    }

    componentWillUnmount () {
        this.timer = null;
    }

    render() {
        return (
            <LogoutUI />
        );
    }
}

export default Index;
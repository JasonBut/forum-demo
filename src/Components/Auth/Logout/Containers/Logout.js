import React,{Component} from "react";
import {connect} from "react-redux";
import {mapDispatches} from "../../../../Redux/Reducers";
import LogoutUI from "../UI/LogoutUI";


const mapDispatch = {
    logout : mapDispatches.formLogout,
};

@connect(null,mapDispatch)
class Index extends Component{

    componentDidMount () {
        this.props.logout();
        this.timer = setTimeout(() => {
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
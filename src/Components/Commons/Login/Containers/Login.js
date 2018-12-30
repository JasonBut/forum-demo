import React,{Component} from "react";
import {connect} from "react-redux";
import LoginUI from "../UI/LoginUI";
import {mapStates,mapDispatches} from "../../../../Redux/Reducers/";

const mapState = (state) => ({
    username : mapStates.getFormValue(state,"loginUsername"),
    password : mapStates.getFormValue(state,"loginPassword"),
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
};

@connect(mapState,mapDispatch)
class Login extends Component {
    render() {
        return (
            <LoginUI {...this.props}/>
        )
    }
}

export default Login;
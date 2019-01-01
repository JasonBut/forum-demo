import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import LoginUI from "../UI/LoginUI";
import LoginSuccess from "../UI/LoginSuccess";
import {mapStates,mapDispatches} from "../../../../Redux/Reducers";

const mapState = (state) => ({
    username : mapStates.getFormValue(state,"loginUsername"),
    password : mapStates.getFormValue(state,"loginPassword"),
    isLogged : mapStates.getAuthIsLogged(state),
    logErr : mapStates.getAuthErr(state),
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
    handleSubmit : mapDispatches.formLoginSubmit,
};

@connect(mapState,mapDispatch)
class Login extends Component {

    static propTypes = {
        isLogged : PropTypes.bool,
    };

    render() {
        const {isLogged} = this.props; //登录状态,用于返回登录成功页面
        return (
            <div className="auth">
                {isLogged
                    ? <LoginSuccess />
                    : <LoginUI {...this.props}/>
                }
            </div>
        )
    }
}

export default Login;
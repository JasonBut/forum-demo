import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AuthUI from "../UI/AuthUI";
import AuthSuccessUI from "../UI/AuthSuccessUI";
import {mapStates,mapDispatches} from "../../../Redux/Reducers";

const mapState = (state) => ({
    username : mapStates.getFormValue(state,"loginUsername"),
    nickname : mapStates.getFormValue(state,"regNickname"),
    password : mapStates.getFormValue(state,"loginPassword"),
    isLogged : mapStates.getAuthIsLogged(state),
    logErr : mapStates.getErrorMessage(state),
    logout : mapDispatches.authLogout,
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
    handleSubmit : mapDispatches.formLoginSubmit,
};

export default (type) => {
    const lowerCaseType = type.toLowerCase();
    const isLogin = type.toLowerCase() === "login";
    if (!(lowerCaseType === "login" || lowerCaseType === "register")) {
        throw new Error(`Auth type should only be "Login", "Logout" or "Register".`);
    }

    @connect(mapState,mapDispatch)
    class Login extends Component {
        static propTypes = {
            isLogged : PropTypes.bool,
        };

        render() {
            const {isLogged,} = this.props;
            const props = {...this.props, isLogin,};
            return (
                <>
                    {isLogged
                        ? <AuthSuccessUI>{isLogin ? "登录" : "注册"}</AuthSuccessUI>
                        : <AuthUI {...props}/>
                    }
                </>
            )
        }
    }
    return Login;
}
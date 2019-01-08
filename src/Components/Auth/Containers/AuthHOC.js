import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Form} from "antd";
import AuthUI from "../UI/AuthUI";
import AuthSuccessUI from "../UI/AuthSuccessUI";
import {mapStates,mapDispatches} from "../../../Redux/Reducers";

const mapState = (state) => ({
    loginUsername : mapStates.getFormValue(state,"loginUsername"),
    regNickname : mapStates.getFormValue(state,"regNickname"),
    loginPassword : mapStates.getFormValue(state,"loginPassword"),
    isLogged : mapStates.getAuthIsLogged(state),
    logErr : mapStates.getErrorMessage(state),
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
    handleSubmit : mapDispatches.formLoginSubmit,
    logout : mapDispatches.authLogout,
};

const formProps = {
    name : "Auth",
    mapPropsToFields(props) {
        return {
            loginUsername : Form.createFormField(props.loginUsername),
            regNickname : Form.createFormField(props.regNickname),
            loginPassword : Form.createFormField(props.loginPassword),
        };
    },
    onFieldsChange(props, changedFields) {
        props.handleChange(changedFields);
    }
};

export default (type) => {
    const lowerCaseType = type.toLowerCase();
    const isLogin = type.toLowerCase() === "login";
    if (!(lowerCaseType === "login" || lowerCaseType === "register")) {
        throw new Error(`Auth type should only be "Login", "Logout" or "Register".`);
    }

    @connect(mapState,mapDispatch)
    @Form.create(formProps)
    class Login extends Component {
        static propTypes = {
            isLogged : PropTypes.bool,
        };

        handleSubmit = (event) => {
            event.preventDefault();
            this.props.form.validateFields((error,values) => {
                if (!error) {
                    this.props.handleSubmit(values);
                }
            })
        };

        render() {
            const {isLogged} = this.props;
            const props = {
                ...this.props,
                handleSubmit : this.handleSubmit,
                isLogin
            };
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
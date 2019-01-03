import React from "react";
import {connect} from "react-redux";
import {mapDispatches} from "../../../Redux/Reducers";
import AuthSuccessUI from "../UI/AuthSuccessUI";

const mapDispatch = {
    logout : mapDispatches.authLogout,
};

export default connect(null,mapDispatch)((props) => {
    props.logout();
    return (
        <AuthSuccessUI>注销</AuthSuccessUI>
    );
})
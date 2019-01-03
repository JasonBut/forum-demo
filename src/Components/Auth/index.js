import React from "react";
import {Route} from "react-router-dom";
import {lazy} from "../../Utils";
import "./auth.less";

const Login = lazy(() => import("./Containers/Login"));
const Logout = lazy(() => import("./Containers/Logout"));
const Register = lazy(() => import("./Containers/Register"));

export default () => (
    <div className="auth">
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
    </div>
)
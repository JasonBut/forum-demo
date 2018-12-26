import React from "react";
import {Route} from "react-router-dom";
import {Layout} from "antd";

import Board from "./Board";
import Login from '../Components/Login';





const {Content} = Layout;

export default function () {
    return (
        <Layout>
            <Content>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Board} />
            </Content>
        </Layout>
    )
}
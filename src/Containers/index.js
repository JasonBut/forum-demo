import React from "react";
import {Route,Switch} from "react-router-dom";
import {Layout} from "antd";
import Loadable from "../api/Loadable";

const Login = Loadable(() => import("../Components/Login"));
const Board = Loadable(() => import("./Board"));
const PostList = Loadable(() => import("./PostList/"));


const {Content} = Layout;

export default function () {
    return (
        <Layout>
            <Content>
                <Switch>
                    <Route exact path="/" render={(props) => <Board {...props} />} />
                    <Route path="/login" render={(props) => <Login {...props} />} />
                    <Route exact path="/board/:id" render={(props) => <PostList {...props} />} />
                </Switch>

            </Content>
        </Layout>
    )
}
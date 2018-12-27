import React from "react";
import {Route,Switch} from "react-router-dom";
import {Layout} from "antd";
import {Loadable} from "../../Utils/";
import "./home.less"

const Board = Loadable(() => import("./Board"));
const PostList = Loadable(() => import("./PostList"));
const Post = Loadable(() => import("./Post"));

const Rollback = Loadable(() => import("../Commons/Rollback"));
const Login = Loadable(() => import("../Commons/Login"));


const {Content} = Layout;

export default function () {
    return (
        <Content id="content">
            <Rollback />
            <Switch>
                <Route exact path="/" render={(props) => <Board {...props} />} />
                <Route path="/login" render={(props) => <Login {...props} />} />
                <Route path="/board/:id" render={(props) => <PostList {...props} />} />
                <Route path="/post/:id" render={(props) => <Post {...props} />} />
            </Switch>
        </Content>
    )
}
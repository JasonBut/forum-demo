import React from "react";
import {Route,Switch} from "react-router-dom";
import {Layout} from "antd";
import {Lazy} from "../../Utils/";
import "./home.less"

const Board = Lazy(() => import("./Board"));
const PostList = Lazy(() => import("./PostList"));
const Post = Lazy(() => import("./Post"));
const Rollback = Lazy(() => import("../Commons/Rollback"));
const Login = Lazy(() => import("../Commons/Login"));


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
import React from "react";
import {Route,Switch} from "react-router-dom";
import {lazy} from "../../Utils/";
import {Layout} from "antd";
import "./home.less"


const Board = lazy(() => import("./Board"));
const PostList = lazy(() => import("./PostList"));
const Post = lazy(() => import("./Post"));
const Rollback = lazy(() => import("../Commons/Rollback"));
const Login = lazy(() => import("../Commons/Login"));


const {Content} = Layout;

export default function () {
    return (
        <Content id="content">
            <Rollback />
            <Switch>
                <Route exact path="/" component={Board} />
                <Route path="/login" component={Login} />
                <Route path="/board/:id"  component={PostList} />
                <Route path="/post/:id" component={Post} />
            </Switch>
        </Content>
    )
}
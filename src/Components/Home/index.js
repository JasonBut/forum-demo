import React from "react";
import {Route,Switch} from "react-router-dom";
import {Lazy} from "../../Utils/";
import {Layout} from "antd";
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
                <Route exact path="/" component={Board} />
                <Route path="/login" component={Login} />
                <Route path="/board/:id"  component={PostList} />
                <Route path="/post/:id" component={Post} />
            </Switch>
        </Content>
    )
}
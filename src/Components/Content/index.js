import React from "react";
import {Route,Switch} from "react-router-dom";
import {lazy} from "../../Utils/";
import {Layout} from "antd";
import "./home.less"

const Board = lazy(() => import("./Board"));
const PostList = lazy(() => import("./PostList"));
const Post = lazy(() => import("./Post"));
const Auth = lazy(() => import("../Auth"));
const Rollback = lazy(() => import("../Commons/Rollback"));
const NotFound = lazy(() => import("../Commons/NotFound"));

const {Content} = Layout;

export default () => (
    <Content id="content">
        <Rollback />
        <Switch>
            <Route exact path="/" component={Board} />
            <Route path="/board/:id"  component={PostList} />
            <Route path="/post/:id" component={Post} />
            <Auth />
            <Route component={NotFound}/>
        </Switch>
    </Content>
)
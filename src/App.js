import React from 'react';
import "@babel/polyfill"
import {Provider} from "react-redux"
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {lazy} from "./Utils/"; //按需导入功能API
import Stores from "./Redux";
import {Layout} from "antd";
import "antd/dist/antd.css";
import "animate.css";


//组件按需加载
const Header = lazy(() => import("./Components/Commons/Header"));
const Footer = lazy(() => import("./Components/Commons/Footer"));
const NotFound = lazy(() => import("./Components/Commons/NotFound"));
const Auth = lazy(() => import("./Components/Auth"));
const Content = lazy(() => import('./Components/Content/'));
const Board = lazy(() => import("./Components/Content/Board"));
const PostList = lazy(() => import("./Components/Content/PostList"));
const Post = lazy(() => import("./Components/Content/Post"));




export default () => (
    <Provider store={Stores}>
        <Router>
            <Layout>
                <Header />
                <Content>
                    <Switch>
                        <Route exact path="/" component={Board}/>
                        <Route path="/board/:id"  component={PostList}/>
                        <Route path="/post/:id" component={Post}/>
                        <Auth />
                        <Route component={NotFound}/>
                    </Switch>
                </Content>
                <Footer />
            </Layout>
        </Router>
    </Provider>
);
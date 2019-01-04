import React from 'react';
import "@babel/polyfill"
import {Provider} from "react-redux"
import {HashRouter as Router} from "react-router-dom";
import {lazy} from "./Utils/"; //按需导入功能API
import Stores from "./Redux"
import {Layout} from "antd";
import "antd/dist/antd.css"

//组件按需加载
const Header = lazy(() => import("./Components/Commons/Header"));
const Content = lazy(() => import('./Components/Content/'));
const Footer = lazy(() => import("./Components/Commons/Footer"));


export default () => (
    <Provider store={Stores}>
        <Router>
            <Layout>
                <Header />
                <Content />
                <Footer />
            </Layout>
        </Router>
    </Provider>
);
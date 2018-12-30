import React from 'react';
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom";
import {lazy} from "./Utils/"; //按需导入功能API
import Stores from "./Redux"
import {Layout} from "antd";
import "antd/dist/antd.css"

//组件按需加载
const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const Home = lazy(() => import('./Components/Home/'));


export default () => (
    <Provider store={Stores}>
        <Router>
            <Layout>
                <Header />
                <Home />
                <Footer />
            </Layout>
        </Router>
    </Provider>
);
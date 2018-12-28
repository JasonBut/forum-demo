//依赖
import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux"
import Loadable from "./Utils/api/Lazy"; //按需导入功能API
import Stores from "./Redux/Stores"

//样式文件
import "antd/dist/antd.css"
import {Layout} from "antd";

//组件按需加载
const Header = Loadable(() => import("./Components/Header"));
const Footer = Loadable(() => import("./Components/Footer"));
const Home = Loadable(() => import('./Components/Home/'));



class App extends Component {
    render() {
        return (
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
    }
}

export default App;
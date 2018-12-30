import React, {Component} from 'react';
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom";
import Lazy from "./Utils/api/lazy"; //按需导入功能API
import Stores from "./Redux"
import {Layout} from "antd";
import "antd/dist/antd.css"

//组件按需加载
const Header = Lazy(() => import("./Components/Header"));
const Footer = Lazy(() => import("./Components/Footer"));
const Home = Lazy(() => import('./Components/Home/'));

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
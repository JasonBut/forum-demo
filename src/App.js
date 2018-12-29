//依赖
import React, {Component} from 'react';
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux"
import Loadable from "./Utils/api/Lazy"; //按需导入功能API
import Stores,{history} from "./Redux"

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
                <ConnectedRouter history={history}>
                    <Layout>
                        <Header />
                        <Home />
                        <Footer />
                    </Layout>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
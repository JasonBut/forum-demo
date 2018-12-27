import React, { Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import "antd/dist/antd.css"
import Loadable from "./Utils/api/Loadable";
import {Layout} from "antd";

const Header = Loadable(() => import("./Components/Header"));
const Footer = Loadable(() => import("./Components/Footer"));
const Home = Loadable(() => import('./Components/Home/'));

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header />
                    <Home />
                    <Footer />
                </Layout>
            </Router>
        );
    }
}

export default App;
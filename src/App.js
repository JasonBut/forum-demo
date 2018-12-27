import React, { Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import "antd/dist/antd.css"
import Loadable from "./api/Loadable";

const Header = Loadable(() => import("./Components/Header"));
const Footer = Loadable(() => import("./Components/Footer"));
const Home = Loadable(() => import('./Containers/'));

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Header />
                    <Home />
                    <Footer />
                </>
            </Router>
        );
    }
}

export default App;
import React, { Component,Suspense} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import "antd/dist/antd.css"



const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Home = React.lazy(() => import('./Containers/'));

class App extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                    <Home />
                    <Footer />
                </Suspense>
            </Router>
        );
    }
}

export default App;
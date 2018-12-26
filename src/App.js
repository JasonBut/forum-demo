import React, { Component,Suspense} from 'react';
// import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './style.less';


import Home from "./Containers"


// const Home = React.lazy(() => import('./Containers/Home'));

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/"} component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
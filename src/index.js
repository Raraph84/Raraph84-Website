import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./home";
import { Account, Login, Logout, Register } from "./account";
import { Footer, Header, NotFound, Unavailable } from "./other";

import "./styles/common.scss";

const MAINTENANCE = false;

class Website extends React.Component {
    render() {
        return <BrowserRouter>
            <Header />
            <div className="content">
                {MAINTENANCE
                    ? <Unavailable />
                    : <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route exact path="/home"><Home /></Route>
                        <Route exact path="/login"><Login /></Route>
                        <Route exact path="/logout"><Logout /></Route>
                        <Route exact path="/register"><Register /></Route>
                        <Route exact path="/account"><Account /></Route>
                        <Route path="*"><NotFound /></Route>
                    </Switch>}
            </div>
            <Footer />
        </BrowserRouter>;
    }
}

ReactDOM.render(<React.StrictMode><Website /></React.StrictMode>, document.getElementById("root"));
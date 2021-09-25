import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Heberg from "./hebergs/hebergs";
import HebergList from "./hebergs/hebergsList";

import { Header, NotFound } from "./other";
import { Login, Logout, Register } from "./account";
import { AccountPage } from "./accountPage";
import { Home } from "./home";

class Website extends React.Component {

    componentDidMount() {
        document.getElementById("pageLoading").remove();
    }

    render() {
        return <BrowserRouter>
            <link rel="stylesheet" href="/style/common.css" />
            <div id="loading" className="loading" style={{ display: "none" }}><i className="fas fa-spinner"></i></div>
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/login"><Login /></Route>
                    <Route exact path="/register"><Register /></Route>
                    <Route exact path="/account"><AccountPage /></Route>
                    <Route exact path="/logout"><Logout /></Route>
                    <Route exact path="/hebergs"><HebergList /></Route>
                    <Route exact path="/hebergs/:id"><Heberg /></Route>
                    <Route exact path="/freenitro">{() => window.location.assign("https://youtu.be/dQw4w9WgXcQ")}</Route>
                    <Route path="*"><NotFound /></Route>
                </Switch>
            </div>
        </BrowserRouter>;
    }
}

ReactDOM.render(<React.StrictMode><Website /></React.StrictMode>, document.getElementById("root"));
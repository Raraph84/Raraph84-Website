import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header, NotFound, Unavailable } from "./other";
import { Home } from "./home";
import { Login, Logout, Register, Account } from "./account";

import "./styles/common.scss";

const UNAVAILABLE = false; // Je ne sais pas s'il y a moyen de recup depuis l'environnement

class Website extends React.Component {
    render() {
        return <BrowserRouter>
            <Header />
            <div className="content">
                {{ 
                UNAVAILABLE ?
                <Unavailable /> :
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/login"><Login /></Route>
                    <Route exact path="/logout"><Logout /></Route>
                    <Route exact path="/register"><Register /></Route>
                    <Route exact path="/freenitro">{() => window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}</Route>
                    <Route path="*"><NotFound /></Route>
                </Switch>
                }}
            </div>
        </BrowserRouter>;
    }
}

ReactDOM.render(<React.StrictMode><Website /></React.StrictMode>, document.getElementById("root"));

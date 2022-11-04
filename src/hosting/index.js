import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./hosting";

import "../styles/hosting.scss";

export default class HostingRoutes extends Component {
    render() {
        return <Routes>
            <Route path="/" element={<Home />} />
        </Routes>;
    }
}

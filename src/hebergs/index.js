import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import { Hebergs } from "./hebergs";

import "../styles/hebergs.scss";

export default class HebergsRoutes extends Component {
    render() {
        return <Routes>
            <Route path="/" element={<Hebergs />} />
        </Routes>;
    }
}

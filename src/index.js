import { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./home";
import Hosting from "./hosting/hosting";
import { Account, Login, Logout, Register } from "./account";
import { Footer, Header, NotFound, Rick, Unavailable } from "./other";

import "./styles/common.scss";

const MAINTENANCE = false;

class Website extends Component {

    componentDidMount() {
        if (document.readyState === "complete") this.updateContentHeight();
        else window.addEventListener("load", () => this.updateContentHeight());
        window.addEventListener("resize", () => this.updateContentHeight());
    }

    updateContentHeight() {
        const content = document.getElementById("content");
        const header = document.getElementById("header");
        const footer = document.getElementById("footer");
        content.style.minHeight = (window.innerHeight - header.offsetHeight - footer.offsetHeight) + "px";
    }

    render() {
        return <BrowserRouter>
            <Header />
            <div className="content" id="content">
                {MAINTENANCE
                    ? <Unavailable />
                    : <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/hosting" element={<Hosting />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/cgu" element={<Rick />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>}
            </div>
            <Footer />
        </BrowserRouter>;
    }
}

createRoot(document.getElementById("root")).render(<Website />);

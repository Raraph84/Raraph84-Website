import { Component, createRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./home";
import { PasswdGen } from "./passwdgen";
import { Countdown } from "./countdown";
import { Account, Login, Logout, Register } from "./account";
import { Footer, Header, NotFound, Rick } from "./other";

import "./styles/common.scss";

class Website extends Component {

    constructor(props) {

        super(props);

        this.headerRef = createRef();
        this.mainRef = createRef();
        this.footerRef = createRef();

        this.state = { footerAndHeaderEnabled: true };
    }

    componentDidMount() {
        if (document.readyState === "complete") this.updateContentHeight();
        else window.addEventListener("load", () => this.updateContentHeight());
        window.addEventListener("resize", () => this.updateContentHeight());
    }

    updateContentHeight() {
        if (!this.headerRef.current || !this.mainRef.current || !this.footerRef.current) return;
        if (this.state.footerAndHeaderEnabled)
            this.mainRef.current.style.minHeight = (window.innerHeight - this.headerRef.current.offsetHeight - this.footerRef.current.offsetHeight) + "px";
        else
            this.mainRef.current.style.minHeight = null;
    }

    render() {

        const setHeaderAndFooterEnabled = (value) => this.setState({ footerAndHeaderEnabled: value }, () => this.updateContentHeight());

        return <BrowserRouter>
            {this.state.footerAndHeaderEnabled && <Header headerRef={this.headerRef} />}
            <main ref={this.mainRef}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/passwdgen" element={<PasswdGen />} />
                    <Route path="/countdown" element={<Countdown setHeaderAndFooterEnabled={setHeaderAndFooterEnabled} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/cgu" element={<Rick />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            {this.state.footerAndHeaderEnabled && <Footer footerRef={this.footerRef} />}
        </BrowserRouter>;
    }
}

createRoot(document.getElementById("root")).render(<Website />);

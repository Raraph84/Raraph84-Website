import { Component, createRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./home";
import { PasswdGen } from "./passwdgen";
import { Countdown } from "./countdown";
import { Account, Login, Logout, Register } from "./account";
import { Footer, Header, NotFound, Rick, Unavailable } from "./other";

import "./styles/common.scss";

const MAINTENANCE = false;

class Website extends Component {

    constructor(props) {

        super(props);

        this.headerRef = createRef();
        this.contentRef = createRef();
        this.footerRef = createRef();

        this.state = { footerAndHeaderEnabled: true };
    }

    componentDidMount() {
        if (document.readyState === "complete") this.updateContentHeight();
        else window.addEventListener("load", () => this.updateContentHeight());
        window.addEventListener("resize", () => this.updateContentHeight());
    }

    updateContentHeight() {
        if (!this.headerRef.current || !this.contentRef.current || !this.footerRef.current) return;
        if (!this.state.footerAndHeaderEnabled)
            this.contentRef.current.style.minHeight = (window.innerHeight - this.headerRef.current.offsetHeight - this.footerRef.current.offsetHeight) + "px";
        else
            this.contentRef.current.style.minHeight = null;
    }

    render() {

        const setHeaderAndFooterEnabled = (value) => this.setState({ footerAndHeaderEnabled: value });

        return <BrowserRouter>
            {this.state.footerAndHeaderEnabled ? <Header headerRef={this.headerRef} /> : null}
            <div className="content" ref={this.contentRef}>
                {MAINTENANCE
                    ? <Unavailable />
                    : <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/passwdgen" element={<PasswdGen />} />
                        <Route path="/countdown" element={<Countdown setHeaderAndFooterEnabled={setHeaderAndFooterEnabled} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/cgu" element={<Rick />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>}
            </div>
            {this.state.footerAndHeaderEnabled ? <Footer footerRef={this.footerRef} /> : null}
        </BrowserRouter>;
    }
}

createRoot(document.getElementById("root")).render(<Website />);

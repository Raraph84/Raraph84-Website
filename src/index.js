import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
                    : <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>}
            </div>
            <Footer />
        </BrowserRouter>;
    }
}

createRoot(document.getElementById("root")).render(<Website />);

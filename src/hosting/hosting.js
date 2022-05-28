import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../styles/hosting.scss";

class Home extends React.Component {
    render() {

        document.title = "Service d'hébergement | Raraph84";

        return <div className="hosting-home">
            <div className="title">Service d'hébergement</div>

            <div className="services">
                <Link to={"/hosting/minecraft"} className="box link-container">
                    <div className="box-title link">Serveur Minecraft</div>
                    <img alt="Logo" src="/imgs/hosting/logo-minecraft.png" />
                    <div></div>
                </Link>
                <Link to={"/hosting/bungeecord"} className="box link-container">
                    <div className="box-title link">Serveur BungeeCord</div>
                    <img alt="Logo" src="/imgs/hosting/logo-bungeecord.png" />
                </Link>
                <Link to={"/hosting/nodejs"} className="box link-container">
                    <div className="box-title link">Hébergement NodeJS</div>
                    <img alt="Logo" src="/imgs/hosting/logo-nodejs.png" />
                </Link>
                <Link to={"/hosting/python"} className="box link-container">
                    <div className="box-title link">Hébergement Python</div>
                    <img alt="Logo" src="/imgs/hosting/logo-python.png" />
                </Link>
                <Link to={"/hosting/website"} className="box link-container">
                    <div className="box-title link">Site web</div>
                    <img alt="Logo" src="/imgs/hosting/logo-website.png" />
                </Link>
                <Link to={"/hosting/kvmvps"} className="box link-container">
                    <div className="box-title link">VPS KVM</div>
                    <img alt="Logo" src="/imgs/hosting/logo-debian.png" />
                </Link>
            </div>
        </div>;
    }
}

export default class Hosting extends React.Component {
    render() {
        return <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>;
    }
}

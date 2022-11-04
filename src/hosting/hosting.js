import { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {

        document.title = "Service d'hébergement | Raraph84";

        return <div className="hosting-home">
            <div className="title">Service d'hébergement</div>

            <div className="subtitle">Services</div>
            <div className="services">
                <Link to="/hosting/minecraft" className="box link-container">
                    <div className="box-title link">Serveur Minecraft</div>
                    <img alt="Logo" src="/imgs/hosting/logo-minecraft.png" />
                    <div>Jouez à Minecraft vos amis</div>
                </Link>
                <Link to="/hosting/bungeecord" className="box link-container">
                    <div className="box-title link">Serveur BungeeCord</div>
                    <img alt="Logo" src="/imgs/hosting/servers.png" />
                    <div>Reliez plusieurs serveurs Minecraft</div>
                </Link>
                <Link to="/hosting/nodejs" className="box link-container">
                    <div className="box-title link">Hébergement NodeJS</div>
                    <img alt="Logo" src="/imgs/hosting/logo-nodejs.png" />
                    <div>Hébergez une api, un bot développé en Javascript</div>
                </Link>
                <Link to="/hosting/python" className="box link-container">
                    <div className="box-title link">Hébergement Python</div>
                    <img alt="Logo" src="/imgs/hosting/logo-python.png" />
                    <div>Hébergez une api, un bot développé en Python</div>
                </Link>
                <Link to="/hosting/website" className="box link-container">
                    <div className="box-title link">Site web</div>
                    <img alt="Logo" src="/imgs/hosting/globe.png" />
                    <div>Mettez votre site web en ligne</div>
                </Link>
                <Link to="/hosting/database" className="box link-container">
                    <div className="box-title link">Base de donnée</div>
                    <img alt="Logo" src="/imgs/hosting/database.png" />
                    <div>Stockez des données avec la puissance du SQL</div>
                </Link>
                <Link to="/hosting/kvmvps" className="box link-container">
                    <div className="box-title link">VPS KVM</div>
                    <img alt="Logo" src="/imgs/hosting/logo-debian.png" />
                    <div>Ayez un accès complet à votre serveur pour configurer tous vos services</div>
                </Link>
            </div>
        </div>;
    }
}

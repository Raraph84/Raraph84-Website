import { Component } from "react";
import { Link } from "react-router-dom";
import { Info, Loading } from "../other";
import { getHebergs } from "../api";

import "../styles/hebergs.scss";

export default class Hebergs extends Component {

    constructor(props) {

        super(props);

        this.state = { requesting: false, info: null, hebergs: [] };
    }

    componentDidMount() {

        this.setState({ requesting: true });
        getHebergs().then((hebergs) => this.setState({ requesting: false, hebergs })).catch((message) => {
            if (message === "Invalid token") {
                localStorage.removeItem("token");
                document.location.assign("/");
            } else this.setState({ requesting: false, info: <Info>Un problème est survenu !</Info> });
        });
    }

    render() {

        document.title = "Mes hébergements | Raraph84";

        return <div className="hebergs">
            <div className="title">Mes hébergements</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            <div className="hebergs">{this.state.hebergs.length > 0
                ? this.state.hebergs.map((heberg) => <Heberg key={heberg.id} heberg={heberg} />)
                : "Vous n'avez aucun hébergement !"}</div>
        </div>;
    }
}

class Heberg extends Component {
    render() {

        const logo = {
            nodejs: "/imgs/hosting/logo-nodejs.png",
            python: "/imgs/hosting/logo-python.png",
            website: "/imgs/hosting/globe.png",
            minecraft: "/imgs/hosting/logo-minecraft.png",
            bungeecord: "/imgs/hosting/servers.png",
            vps: "/imgs/hosting/logo-debian.png",
            mysql: "/imgs/hosting/database.png",
            mongodb: "/imgs/hosting/database.png"
        }[this.props.heberg.type];

        const type = {
            nodejs: "NodeJS",
            python: "Python",
            website: "Site web",
            minecraft: "Serveur Minecraft",
            bungeecord: "Serveur BungeeCord",
            vps: "VPS",
            mysql: "Base de données MySQL",
            mongodb: "Base de données MongoDB"
        }[this.props.heberg.type];

        const stateColor = { started: "green", stopped: "red" }[this.props.heberg.state] || "orange";

        return <Link className="heberg box link-container" to={"/hebergs/" + this.props.heberg.id}>
            <img src={logo} alt="Logo type" />
            <div className="name link">{this.props.heberg.name} - {type}</div>
            {this.props.heberg.state ? <i className="fas fa-dot-circle" style={{ color: stateColor }} /> : null}
        </Link>;
    }
}

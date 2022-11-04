import { Component } from "react";
import { useParams } from "react-router-dom";
import { Info, Loading } from "../other";
import { getHeberg } from "../api";

import "../styles/hebergs.scss";

class Heberg extends Component {

    constructor(props) {

        super(props);

        /*this.start = () => {
            this.setState({ status: "" });
            post("/heberg/start", JSON.stringify({ token: localStorage.getItem("token"), id: this.id })).then((response) => {
                if (response.code !== 200) this.checkError(response.message);
                else this.setState({ status: "Démarrage du serveur..." });
            });
        }

        this.stop = () => {
            this.setState({ status: "" });
            post("/heberg/stop", JSON.stringify({ token: localStorage.getItem("token"), id: this.id })).then((response) => {
                if (response.code !== 200) this.checkError(response.message);
                else this.setState({ status: "Arrêt du serveur..." });
            });
        }

        this.restart = () => {
            this.setState({ status: "" });
            post("/heberg/restart", JSON.stringify({ token: localStorage.getItem("token"), id: this.id })).then((response) => {
                if (response.code !== 200) this.checkError(response.message);
                else this.setState({ status: "Redémarrage du serveur..." });
            });
        }

        this.deploy = () => {
            this.setState({ status: "" });
            post("/heberg/deploy", JSON.stringify({ token: localStorage.getItem("token"), id: this.id })).then((response) => {
                if (response.code !== 200) this.checkError(response.message);
                else this.setState({ status: "Déploiement du serveur..." });
            });
        }

        this.downloadLibs = () => {
            this.setState({ status: "" });
            post("/heberg/downloadLibs", JSON.stringify({ token: localStorage.getItem("token"), id: this.id })).then((response) => {
                if (response.code !== 200) this.checkError(response.message);
                else this.setState({ status: "Téléchargement des librairies..." });
            });
        }*/

        this.ws = null;
        this.state = { requesting: false, info: null, heberg: null, logs: [] };
    }

    componentDidMount() {

        //this.connectLogs();

        this.setState({ requesting: true });
        getHeberg(this.props.params.hebergId).then((heberg) => this.setState({ requesting: false, heberg })).catch((message) => {
            if (message === "Invalid token") {
                localStorage.removeItem("token");
                document.location.assign("/");
            } else this.setState({ requesting: false, info: <Info>Un problème est survenu !</Info> });
        });
    }

    /*connectLogs() {

        this.log("[raraph.fr] Connexion...");
        this.ws = new WebSocket("wss://gateway.raraph.fr/hebergs");

        this.ws.addEventListener("open", () => {
            this.log("[raraph.fr] Connecté");
            this.ws.send(JSON.stringify({ type: "logs", token: localStorage.getItem("token"), id: this.id }));
        });

        this.ws.addEventListener("message", (event) => {

            let message;
            try {
                message = JSON.parse(event.data);
            } catch (error) {
                return;
            }

            if (message.type === "log" && message.log) {
                this.log(message.log);
            }
        });

        this.ws.addEventListener("close", () => {
            this.log("[raraph.fr] Déconnecté ! Reconnexion...");
            setTimeout(() => this.connectLogs(), 1000);
        });
    }

    log(message) {
        this.state.logs.push(message);
        this.setState({ logs: this.state.logs });
    }*/

    render() {

        document.title = "Hébergement | Raraph84";

        const logo = this.state.heberg ? {
            nodejs: "/imgs/hosting/logo-nodejs.png",
            python: "/imgs/hosting/logo-python.png",
            website: "/imgs/hosting/globe.png",
            minecraft: "/imgs/hosting/logo-minecraft.png",
            bungeecord: "/imgs/hosting/servers.png",
            vps: "/imgs/hosting/logo-debian.png",
            mysql: "/imgs/hosting/database.png",
            mongodb: "/imgs/hosting/database.png"
        }[this.state.heberg.type] : null;

        const type = this.state.heberg ? {
            nodejs: "NodeJS",
            python: "Python",
            website: "Site web",
            minecraft: "Serveur Minecraft",
            bungeecord: "Serveur BungeeCord",
            vps: "VPS",
            mysql: "Base de données MySQL",
            mongodb: "Base de données MongoDB"
        }[this.state.heberg.type] : null;

        const state = this.state.heberg ? {
            starting: "Démarrage",
            started: "En ligne",
            stopping: "Arrêt",
            stopped: "Hors ligne",
            restarting: "Redémarrage",
            deploying: "Déploiement"
        }[this.state.heberg.state] : null;

        const stateColor = this.state.heberg ? ({ started: "green", stopped: "red" }[this.state.heberg.state] || "orange") : null;

        return <div className="heberg">
            <div className="title">{this.state.heberg ? this.state.heberg.name : "Hébergement"}</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            {this.state.heberg ? <div className="panel">

                <div className="box infos">
                    <div className="name">Informations</div>

                    <div className="subname">Nom :</div>
                    <div>{this.state.heberg.name}</div>

                    <div className="subname">Type :</div>
                    <div>{type} <img src={logo} alt="Logo type" /></div>

                    {["nodejs", "python", "minecraft", "bungeecord", "vps", "minecraft"].includes(this.state.heberg.type) ? <>
                        <div className="subname">Statut :</div>
                        <div>{state} <i className="fas fa-dot-circle" style={{ color: stateColor }} /></div>
                    </> : null}
                </div>

                <div className="box logs">
                    <div className="name">Journaux</div>
                    <textarea readOnly value={this.state.logs.join("\n")} />
                </div>

                <div className="box commands">
                    <div className="name">Commandes</div>
                    <button>Démarrer</button>
                    <button>Arrêter</button>
                    <button>Redémarrer</button>
                </div>

            </div> : null}
        </div>;
    }
}

// eslint-disable-next-line
export default (props) => <Heberg params={useParams()} {...props} />;

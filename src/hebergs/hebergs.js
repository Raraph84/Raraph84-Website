import { Component } from "react";

export class Heberg extends Component {

    constructor(props) {

        super(props);

        document.title = "Hébergement | Raraph84";

        this.checkError = (message) => {
            if (message === "Invalid token") {
                document.location.assign("/login");
            } else {
                this.setState({ status: {
                    {
                        heberg_/*does_*/not_exist: "Cet hébergement n'existe pas !",
                        no_permission: "Vous n'avez pas accès a cet hébergement !",
                        heberg_already_started: "Cet hébergement est déjà démarré !",
                        heberg_already_stopped: "Cet hébergement est déjà arrêté !",
                    }[message.toLowerCase().replace(/ /g, '_')] || "Une erreur est survenue !"
                }});
            }
        }

        // La suite est une catastrophe, mais flemme de modif
        
        this.start = () => {
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
        }

        this.id = props.urlParams.id;
        this.ws = null;
        this.state = { status: "", infos: {}, logs: [] };
    }

    componentDidMount() {

        this.connectLogs();

        post("/heberg", JSON.stringify({ token: localStorage.getItem("token"), id: this.id })).then((response) => {
            if (response.code === 200) {
                this.setState({ infos: response });
                document.title = response.name + " | Raraph84";
            } else this.checkError(response.message);
        });
    }

    connectLogs() {

        this.log("[Raraph84.ml] Connexion...");
        this.ws = new WebSocket("wss://gateway.hebergs.primordium.fr/");

        this.ws.addEventListener("open", () => {
            this.log("[Raraph84.ml] Connecté");
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
            this.log("[Raraph84.ml] Déconnecté ! Reconnexion...");
            setTimeout(() => this.connectLogs(), 1000);
        });
    }

    log(message) {
        this.state.logs.push(message);
        this.setState({ logs: this.state.logs });
    }

    render() {
        return <div className="hebergsPanel">

            <div className="title">{this.state.infos.name || "Hébergement"}</div>
            {this.state.status ? <Status message={this.state.status} animate /> : ""}

            <div className="panel">
                <div className="box infos">
                    <div className="name">Informations</div>

                    <div className="subname">Nom :</div>
                    <div>{this.state.infos.name || "Sans nom"}</div>

                    <div className="subname">Type :</div>
                    {this.state.infos.type === "nodejs" ?
                        <div>NodeJS <i style={{ color: "#82c91e" }} className="fab fa-node-js" /></div>
                        : <div>Autre</div>}

                    <div className="subname">GitHub :</div>
                    <div>{this.state.infos.github || "Aucun"}</div>

                    <div className="subname">Statut :</div>
                    <div>
                        {this.state.infos.online ? "En ligne " : "Hors ligne "}
                        <i className="fas fa-dot-circle" style={{ color: this.state.infos.online ? "green" : "red" }} />
                    </div>

                    <div className="subname">Déploiement automatique :</div>
                    <div>{this.state.infos.autoDeploy ? "Oui" : "Non"}</div>

                    <div className="subname">Cacher les librairies :</div>
                    <div>{this.state.infos.cacheLibs ? "Oui" : "Non"}</div>
                </div>

                <div className="box">
                    <div className="name">{this.state.infos.canSendCommands ? "Console" : "Journaux"}</div>
                    <div className="logs">
                        <textarea readOnly value={this.state.logs.join("\n")} />
                        <input style={{ display: this.state.infos.canSendCommands ? "" : "none" }} />
                    </div>
                </div>

                <div className="box commands">
                    <div className="name">Commandes</div>
                    <button onClick={this.start}>Démarrer</button>
                    <button onClick={this.stop}>Arrêter</button>
                    <button onClick={this.restart}>Redémarrer</button>
                    <button onClick={this.deploy}>Déployer</button>
                    <button onClick={this.downloadLibs} style={{ display: this.state.infos.cacheLibs ? "none" : "" }}>Retélécharger les librairies</button>
                </div>
            </div>
        </div>;
    }
}

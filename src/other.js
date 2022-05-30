import { Component } from "react";
import { Link } from "react-router-dom";
import { getUser } from "./api";

export class Header extends Component {

    constructor(props) {

        super(props);

        this.state = { user: null, menu: false };
    }

    componentDidMount() {

        if (!localStorage.getItem("token"))
            return;

        getUser("@me").then((user) => this.setState({ user })).catch((message) => {
            if (message === "Invalid token") {
                localStorage.removeItem("token");
                document.location.assign("/");
            }
        });
    }

    render() {

        return <div className="header">

            <Link to="/home" className="logo link-container">
                <img src="/imgs/logo.png" alt="Logo" />
                <span className="link">Raraph84</span>
            </Link>

            <div className="links">
                <Link to="/home" className="link">Accueil</Link>
                <div className="dropdown">
                    <Link to="/hosting" className="link">Service d'hébergement <i className="fa-solid fa-caret-down" /></Link>
                    <div className="dropdown-content">
                        <Link to="/hosting/minecraft" className="link">Minecraft</Link>
                        <Link to="/hosting/bungeecord" className="link">BungeeCord</Link>
                        <Link to="/hosting/nodejs" className="link">NodeJS</Link>
                        <Link to="/hosting/python" className="link">Python</Link>
                        <Link to="/hosting/website" className="link">Site web</Link>
                        <Link to="/hosting/database" className="link">Base de donnée</Link>
                        <Link to="/hosting/kvmvps" className="link">VPS KVM</Link>
                    </div>
                </div>
            </div>

            {!this.state.user
                ? <Link className="login" to="/login">Se connecter</Link>
                : <div className="menu" onClick={() => this.setState({ menu: !this.state.menu })}>
                    <div className="user">
                        <img src={this.state.user.avatarUrl || this.state.user.defaultAvatarUrl} alt=" " />
                        <span>{this.state.user.username}</span>
                    </div>
                    {!this.state.menu ? null : <div>
                        <Link to="/account">Mon compte</Link>
                        <Link to="/logout" style={{ color: "red" }}>Se déconnecter</Link>
                    </div>}
                </div>}
        </div>;
    }
}

export class Footer extends Component {
    render() {
        return <div className="footer">

            <div className="links">
                <a href="https://discord.gg/MRjDxpx" target="_blank" rel="noreferrer"><i className="fa-brands fa-discord"></i></a>
                <a href="https://github.com/Raraph84" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://youtube.com/channel/UCA0z90EeHObZqVu-Yx-SKeQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://twitter.com/Raraph84" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href="mailto:raraph84@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>;
    }
}

export class NotFound extends Component {
    render() {

        document.title = "Page introuvable | Raraph84";

        return <div className="notfound">
            <div className="title">Tu es perdu ?</div>
            <div className="subtitle">Cette page n'existe pas (ou pas encore)</div>
            <Link to="/home" className="button">Revenir sur la page principale</Link>
        </div>;
    }
}

export class Unavailable extends Component {
    render() {

        document.title = "Maintenance | Raraph84";

        return <div>
            <div className="title">Maintenance</div>
            <div className="subtitle">Le site est actuellement indisponible.</div>
        </div>;
    }
}

export class Info extends Component {
    render() {
        return <div className="info" style={{ backgroundColor: this.props.color || "rgba(255, 0, 0, 0.25)" }}>{this.props.children}</div>;
    }
}

export class Loading extends Component {
    render() {
        return <div className="loading"><i className="fas fa-spinner" /></div>;
    }
}

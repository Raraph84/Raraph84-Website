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
            if (message === "You must be logged") {
                localStorage.removeItem("token");
                document.location.assign("/");
            }
        });
    }

    render() {
        return <div className="header">

            <Link to="/home" className="logo">
                <img src="/imgs/logo.png" alt="Logo" />
                <span className="link">Raraph84</span>
            </Link>

            {!this.state.user
                ? <Link className="login" to="/login">Se connecter</Link>
                : <div className="menu" onClick={() => this.setState({ menu: !this.state.menu })}>
                    <div className="user">
                        <img src={this.state.user.avatarUrl} alt=" " />
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
        return <div className="footer"></div>;
    }
}

export class NotFound extends Component {
    render() {

        document.title = "Page introuvable | Raraph84";

        return <div>
            <div className="title">Tu es perdu ?</div>
            <div className="subtitle">Cette page n'existe pas (ou pas encore)</div>
            <Link to="/home"><button>Revenir sur la page principale</button></Link>
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
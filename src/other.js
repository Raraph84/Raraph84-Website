import { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {

    constructor(props) {

        super(props);

        this.state = { user: null, menu: false };
    }

    componentDidMount() {
        if (!localStorage.getItem("token")) return;
        fetch("https://api.raraph84.ml/user", { headers: { authorization: localStorage.getItem("token") } }).then((res) => res.json()).then((res) => {
            if (res.code === 200)
                this.setState({ user: { username: res.username, avatar: "https://api.raraph84.ml/avatar?userId=" + res.userId } });
            else if (res.code === 401)
                localStorage.removeItem("token");
        });
    }

    render() {
        return <div className="header">

            <Link to="/home" className="logo">
                <img src="/imgs/logo.png" alt="Logo" />
                <span className="link">Raraph84</span>
            </Link>

            {!this.state.user ?
                <Link className="login" to="/login">Se connecter</Link> :
                <div className="menu">
                    <div className="user" onClick={() => this.setState({ menu: !this.state.menu })}>
                        <img src={this.state.user.avatar} alt=" " />
                        <span>{this.state.user.username}</span>
                    </div>
                    <div style={{ display: this.state.menu ? "" : "none" }}>
                        <Link to="/logout" onClick={() => this.setState({ menu: false })} style={{ color: "red" }}>Se déconnecter</Link>
                    </div>
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
            <Link className="button" to="/home">Revenir sur la page principale</Link>
        </div>;
    }
}

export class Info extends Component {
    render() {
        return <div className="info" style={{ backgroundColor: this.props.color || "rgba(255, 0, 0, 0.25)" }}>{this.props.children}</div>
    }
}

export class Loading extends Component {
    render() {
        return <div className="loading"><i className="fas fa-spinner" /></div>
    }
}
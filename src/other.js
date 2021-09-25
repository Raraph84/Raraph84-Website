import React from "react";
import { Link } from "react-router-dom";

import { animate } from "./utils";

export class Header extends React.Component {

    constructor(props) {

        super(props);

        this.state = { user: null, menu: false };
    }

    componentDidMount() {

        fetch("https://api.raraph84.ml/user", { headers: { authorization: localStorage.getItem("token") } }).then((res) => res.json()).then((res) => {

            if (res.code === 200) this.setState({
                user: {
                    username: res.username,
                    avatar: "https://api.raraph84.ml/avatar?userId=" + res.userId
                }
            });
        });
    }

    render() {
        return <header>

            <Link to="/home" className="logo">
                <img src="/imgs/logo.png" alt="Logo" />
                <span>Raraph84</span>
            </Link>

            {!this.state.user ?
                <Link className="login" to="/login">Se connecter</Link>
                :
                <div className="menu">
                    <div className="user" onClick={() => this.setState({ menu: !this.state.menu })}>
                        <img src={this.state.user.avatar} alt=" " />
                        <span>{this.state.user.username}</span>
                    </div>
                    <div style={{ display: this.state.menu ? "block" : "none" }}>
                        <Link to="/account" onClick={() => this.setState({ menu: false })}>Mon compte</Link>
                        <Link to="/hebergs" onClick={() => this.setState({ menu: false })}>Mes hébergements</Link>
                        <Link to="/logout" onClick={() => this.setState({ menu: false })} style={{ color: "red" }}>Se déconnecter</Link>
                    </div>
                </div>}
        </header>;
    }
}

export class Footer extends React.Component {

    render() {
        return <footer>
        </footer>;
    }
}

export class NotFound extends React.Component {

    constructor(props) {

        super(props);

        document.title = "Page introuvable | Raraph84";
    }

    render() {
        return <div>
            <div className="title">Tu es perdu ?</div>
            <Link className="button" to="/home">Revenir sur la page principale</Link>
        </div>;
    }
}

export class Status extends React.Component {

    constructor(props) {

        super(props);

        this.statusRef = React.createRef();
    }

    componentDidMount() {

        if (this.props.animate) animate(this.statusRef.current, "bounceIn", "1s");
    }

    render() {
        return <div className="status" ref={this.statusRef}>{this.props.message}</div>;
    }
}
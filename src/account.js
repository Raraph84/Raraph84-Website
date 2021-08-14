import React from "react";
import { Link } from "react-router-dom";
import { Status } from "./other";
import { post } from "./utils";

export class Login extends React.Component {

    constructor(props) {

        super(props);

        document.title = "Connexion | Raraph84";

        this.state = { status: "" };
    }

    render() {

        const login = () => {

            if (localStorage.getItem("token")) {
                this.setState({ status: "Vous êtes déjà connecté !" });
                return;
            }

            this.setState({ status: "" });

            post("/login", JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })).then((response) => {

                if (response.code === 200) {

                    localStorage.setItem("token", response.token);
                    document.location.assign("/");

                } else {

                    if (response.message === "Missing username")
                        this.setState({ status: "Nom d'utilisateur/Email manquant(e) !" });
                    else if (response.message === "Missing password")
                        this.setState({ status: "Mot de passe manquant !" });
                    else if (response.message === "Account not exist")
                        this.setState({ status: "Ce compte n'existe pas !" });
                    else if (response.message === "Incorrect password")
                        this.setState({ status: "Mot de passe incorrect !" });
                    else
                        this.setState({ status: "Une erreur inconnue est survenue !" });
                }
            });
        }

        return <div>
            <div className="title">Connexion</div>
            {this.state.status ? <Status message={this.state.status} animate /> : ""}

            <div>Nom d'utilisateur/Email : <input type="text" id="username" onKeyPress={(event) => { if (event.key === "Enter") document.getElementById("password").focus(); }}></input></div>
            <div>Mot de passe : <input type="password" id="password" onKeyPress={(event) => { if (event.key === "Enter") document.getElementById("connect").click(); }}></input></div>
            <div><button className="button" id="connect" onClick={() => login()}>Se connecter</button></div>

            <Link className="link" to="/register">Je n'ai pas de compte</Link>
        </div>;
    }
}

export class Register extends React.Component {

    constructor(props) {

        super(props);

        document.title = "Créer un compte | Raraph84";

        this.state = { status: "" };
    }

    render() {

        const create = () => {

            this.setState({ status: "" });

            if (localStorage.getItem("token")) {
                this.setState({ status: "Vous êtes déjà connecté !" });
                return;
            }

            if (!document.getElementById("cgu").checked) {
                this.setState({ status: "Vous devez lire et accepter les conditions générales d'utilisation !" });
                return;
            }

            if (document.getElementById("password").value !== document.getElementById("password2").value) {
                this.setState({ status: "Les mots de passe ne correspondent pas !" });
                return;
            }

            this.setState({ status: "" });

            post("/createAccount", JSON.stringify({
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            })).then((response) => {

                if (response.code === 200) {

                    localStorage.setItem("token", response.token);
                    document.location.assign("/");

                } else {

                    if (response.message === "Missing email")
                        this.setState({ status: "Email manquante !" });
                    else if (response.message === "Email too long")
                        this.setState({ status: "L'adresse email est trop longue !" });
                    else if (response.message === "Missing username")
                        this.setState({ status: "Nom d'utilisateur manquant !" });
                    else if (response.message === "Username too long")
                        this.setState({ status: "Le nom d'utilisateur est trop long !" });
                    else if (response.message === "Missing password")
                        this.setState({ status: "Mot de passe manquant !" });
                    else if (response.message === "Username already exist")
                        this.setState({ status: "Ce nom d'utilisateur est déjà utilisé !" });
                    else if (response.message === "Email already exist")
                        this.setState({ status: "Cette adresse email est déjà utilisée !" });
                    else
                        this.setState({ status: "Une erreur inconnue est survenue !" });
                }
            });
        }

        return <div>
            <div className="title">Créer un compte</div>
            {this.state.status ? <Status message={this.state.status} animate /> : ""}

            <div>Nom d'utilisateur : <input type="text" id="username" onKeyPress={(event) => { if (event.key === "Enter") document.getElementById("email").focus(); }}></input></div>
            <div>Email : <input type="text" id="email" onKeyPress={(event) => { if (event.key === "Enter") document.getElementById("password").focus(); }}></input></div>
            <div>Mot de passe : <input type="password" id="password" onKeyPress={(event) => { if (event.key === "Enter") document.getElementById("password2").focus(); }}></input></div>
            <div>Retaper le mot de passe : <input type="password" id="password2" onKeyPress={(event) => { if (event.key === "Enter") document.getElementById("create").click(); }}></input></div>
            <div>J'ai lu et accepté les <Link className="link" to="/cgu">conditions générales d'utilisation</Link> : <input type="checkbox" id="cgu"></input></div>
            <div><button className="button" id="create" onClick={() => create()}>Créer le compte</button></div>

            <Link className="link" to="/login"><span>J'ai déjà un compte</span></Link>
        </div>;
    }
}

export class Logout extends React.Component {

    constructor(props) {

        super(props);

        document.title = "Déconnexion...";
    }

    componentDidMount() {

        post("/logout", JSON.stringify({ token: localStorage.getItem("token") })).then(() => {

            localStorage.removeItem("token");
            document.location.assign("/");
        });
    }

    render() {

        return <div>
            <div className="title">Déconnexion...</div>
        </div>;
    }
}
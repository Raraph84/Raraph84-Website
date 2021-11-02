import React from "react";
import { Link } from "react-router-dom";
import { Info, Loading } from "./other";

import "./styles/account.scss";

export class Login extends React.Component {

    constructor(props) {

        super(props);

        this.state = { requesting: false, info: null };
    }

    render() {

        document.title = "Connexion | Raraph84";

        const login = () => {

            if (localStorage.getItem("token")) {
                this.setState({ info: <Info>Vous êtes déjà connecté !</Info> });
                return;
            }

            this.setState({ requesting: true, info: null });

            fetch("https://api.raraph84.ml/login", {
                method: "POST",
                body: JSON.stringify({
                    username: document.getElementById("username").value,
                    password: document.getElementById("password").value
                })
            }).then((res) => res.json()).then((response) => {
                if (response.code === 200) {
                    localStorage.setItem("token", response.token);
                    document.location.assign("/");
                } else if (response.message === "Missing username")
                    this.setState({ requesting: false, info: <Info>Nom d'utilisateur manquant !</Info> });
                else if (response.message === "Missing password")
                    this.setState({ requesting: false, info: <Info>Mot de passe manquant !</Info> });
                else if (response.message === "Invalid username or password")
                    this.setState({ requesting: false, info: <Info>Nom d'utilisateur/mot de passe incorrect !</Info> });
                else if (response.message === "Too many login fails")
                    this.setState({ requesting: false, info: <Info>Trop d'essais de connexion, réessaye plus tard !</Info> });
                else
                    this.setState({ requesting: false, info: <Info>Un problème est survenu !</Info> });
            });
        }

        return <div className="login">
            <div className="title">Connexion</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            <div>
                <span className="hint">Nom d'utilisateur/Email :</span>
                <input type="text" id="username" disabled={this.state.requesting} onKeyPress={(event) => { if (event.key === "Enter") document.getElementById("password").focus(); }}></input>
            </div>

            <div>
                <span className="hint">Mot de passe :</span>
                <input type="password" id="password" disabled={this.state.requesting} onKeyPress={(event) => { if (event.key === "Enter") document.getElementById("login").click(); }}></input>
            </div>

            <div><button className="button" disabled={this.state.requesting} id="login" onClick={() => login()}>Se connecter</button></div>

            <Link to="/register"><span className="link">Je n'ai pas de compte</span></Link>
        </div>;
    }
}

export class Register extends React.Component {

    constructor(props) {

        super(props);

        this.state = { requesting: false, info: null };
    }

    render() {

        document.title = "Créer un compte | Raraph84";

        const createAccount = () => {

            if (localStorage.getItem("token")) {
                this.setState({ info: <Info>Vous êtes déjà connecté !</Info> });
                return;
            }

            if (!document.getElementById("cgu").checked) {
                this.setState({ info: <Info>Vous devez lire et accepter les conditions générales d'utilisation !</Info> });
                return;
            }

            if (document.getElementById("password").value !== document.getElementById("retypePassword").value) {
                this.setState({ info: <Info>Les mots de passe ne correspondent pas !</Info> });
                return;
            }

            this.setState({ requesting: true, info: null });

            fetch("https://api.raraph84.ml/createAccount", {
                method: "POST",
                body: JSON.stringify({
                    username: document.getElementById("username").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value
                })
            }).then((res) => res.json()).then((response) => {

                if (response.code === 200) {
                    localStorage.setItem("token", response.token);
                    document.location.assign("/");
                } else if (response.message === "Missing username")
                    this.setState({ requesting: false, info: <Info>Nom d'utilisateur manquant !</Info> });
                else if (response.message === "Username too long")
                    this.setState({ requesting: false, info: <Info>Le nom d'utilisateur doit faire moins de 25 caractères !</Info> });
                else if (response.message === "Username already exist")
                    this.setState({ requesting: false, info: <Info>Ce nom d'utilisateur est déjà utilisé !</Info> });
                else if (response.message === "Missing email")
                    this.setState({ requesting: false, info: <Info>Email manquante !</Info> });
                else if (response.message === "Invalid email")
                    this.setState({ requesting: false, info: <Info>Email invalide !</Info> });
                else if (response.message === "Email already exist")
                    this.setState({ requesting: false, info: <Info>Cette adresse email est déjà utilisé !</Info> });
                else if (response.message === "Missing password")
                    this.setState({ requesting: false, info: <Info>Mot de passe manquant !</Info> });
                else if (response.message === "Please wait one day to create another account")
                    this.setState({ requesting: false, info: <Info>Trop de créations de comptes, réessaye plus tard !</Info> });
                else
                    this.setState({ requesting: false, info: <Info>Un problème est survenu !</Info> });
            });
        }

        return <div className="login">
            <div className="title">Créer un compte</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            <div>
                <span className="hint">Nom d'utilisateur :</span>
                <input type="text" id="username" disabled={this.state.requesting}></input>
            </div>

            <div>
                <span className="hint">Email :</span>
                <input type="text" id="email" disabled={this.state.requesting}></input>
            </div>

            <div>
                <span className="hint">Mot de passe :</span>
                <input type="password" id="password" disabled={this.state.requesting}></input>
            </div>

            <div>
                <span className="hint">Retaper le mot de passe :</span>
                <input type="password" id="retypePassword" disabled={this.state.requesting}></input>
            </div>

            <div className="hint">J'ai lu et accepté les <Link to="/cgu"><span className="link" >conditions générales d'utilisation</span></Link> : <input type="checkbox" id="cgu"></input></div>

            <div><button className="button" onClick={() => createAccount()}>Créer le compte</button></div>

            <Link to="/login"><span className="link">J'ai déjà un compte</span></Link>
        </div>;
    }
}

export class Logout extends React.Component {

    componentDidMount() {
        fetch("https://api.raraph84.ml/logout", { method: "POST", headers: { authorization: localStorage.getItem("token") } }).then((response) => {
            if (response.status === 204)
                localStorage.removeItem("token");
            document.location.assign("/");
        });
    }

    render() {

        document.title = "Déconnexion | Raraph84";

        return <div>
            <div className="title">Déconnexion...</div>
            <Loading />
        </div>;
    }
}
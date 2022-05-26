import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { Info, Loading } from "./other";
import { login, createAccount, logout, getUser } from "./api";

import "./styles/account.scss";

export class Login extends Component {

    constructor(props) {

        super(props);

        this.username = createRef();
        this.password = createRef();

        this.state = { requesting: false, info: null };
    }

    render() {

        document.title = "Connexion | Raraph84";

        const processLogin = () => {

            if (localStorage.getItem("token")) {
                this.setState({ info: <Info>Vous êtes déjà connecté !</Info> });
                return;
            }

            this.setState({ requesting: true, info: null });
            login(this.username.current.value, this.password.current.value).then((token) => {
                localStorage.setItem("token", token);
                document.location.assign("/");
            }).catch((message) => this.setState({
                requesting: false,
                info: {
                    missing_username: <Info>Veuillez saisir un nom d'utilisateur ou une adresse email !</Info>,
                    missing_password: <Info>Veuillez saisir un mot de passe !</Info>,
                    too_many_fails: <Info>Trop de tentatives, réessayez plus tard !</Info>,
                    invalid_username_or_password: <Info>Le nom d'utilisateur ou le mot de passe est incorrect !</Info>
                }[typeof message === "string" ? message.toLowerCase().replace(/ /g, '_') : ""] || <Info>Un problème est survenu !</Info>
            }));
        }

        return <div className="login">
            <div className="title">Connexion</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            <div>
                <span className="hint">Nom d'utilisateur/Email :</span>
                <input type="text" ref={this.username} disabled={this.state.requesting} autoFocus onKeyPress={(event) => { if (event.code === "Enter") this.password.current.focus(); }} />
            </div>

            <div>
                <span className="hint">Mot de passe :</span>
                <input type="password" ref={this.password} disabled={this.state.requesting} onKeyPress={(event) => { if (event.code === "Enter") processLogin() }} />
            </div>

            <button disabled={this.state.requesting} onClick={processLogin} className="button">Se connecter</button>

            <Link to="/register" className="link">Je n'ai pas de compte</Link>
        </div>;
    }
}

export class Register extends Component {

    constructor(props) {

        super(props);

        this.username = createRef();
        this.email = createRef();
        this.password = createRef();
        this.passwordVerify = createRef();
        this.cgu = createRef();

        this.state = { requesting: false, info: null };
    }

    render() {

        document.title = "Créer un compte | Raraph84";

        const processCreateAccount = () => {

            if (localStorage.getItem("token")) {
                this.setState({ info: <Info>Vous êtes déjà connecté !</Info> });
                return;
            }

            if (this.password.current.value !== this.passwordVerify.current.value) {
                this.setState({ info: <Info>Les mots de passe ne correspondent pas !</Info> });
                return;
            }

            this.setState({ requesting: true, info: null });
            createAccount(this.username.current.value, this.email.current.value, this.password.current.value, this.cgu.current.checked).then((token) => {
                localStorage.setItem("token", token);
                document.location.assign("/");
            }).catch((message) => this.setState({
                requesting: false,
                info: {
                    missing_username: <Info>Veuillez saisir un nom d'utilisateur !</Info>,
                    missing_email: <Info>Veuillez saisir une adresse email !</Info>,
                    invalid_email: <Info>Veuillez saisir une adresse email valide !</Info>,
                    missing_password: <Info>Veuillez saisir un mot de passe !</Info>,
                    too_many_creations: <Info>Trop de créations de comptes, réessayez plus tard !</Info>,
                    username_already_exists: <Info>Ce nom d'utilisateur est déjà utilisé !</Info>,
                    email_already_exists: <Info>Cette adresse email est déjà utilisé !</Info>
                }[typeof message === "string" ? message.toLowerCase().replace(/ /g, '_') : ""] || <Info>Un problème est survenu !</Info>
            }));
        }

        return <div className="login">
            <div className="title">Créer un compte</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            <div>
                <span className="hint">Nom d'utilisateur :</span>
                <input type="text" ref={this.username} autoFocus disabled={this.state.requesting} maxLength={25} />
            </div>

            <div>
                <span className="hint">Email :</span>
                <input type="text" ref={this.email} disabled={this.state.requesting} />
            </div>

            <div>
                <span className="hint">Mot de passe :</span>
                <input type="password" ref={this.password} disabled={this.state.requesting} />
            </div>

            <div>
                <span className="hint">Retaper le mot de passe :</span>
                <input type="password" ref={this.passwordVerify} disabled={this.state.requesting} />
            </div>

            <div>
                <div className="hint">J'ai lu et accepté les <a href="https://youtu.be/dQw4w9WgXcQ"><span className="link">conditions générales d'utilisation</span></a> :</div>
                <input type="checkbox" ref={this.cgu} disabled={this.state.requesting} />
            </div>

            <button onClick={processCreateAccount} className="button">Créer le compte</button>

            <Link to="/login" className="link">J'ai déjà un compte</Link>
        </div>;
    }
}

export class Logout extends Component {

    constructor(props) {

        super(props);

        this.state = { requesting: false, info: null };
    }

    componentDidMount() {

        if (!localStorage.getItem("token")) {
            this.setState({ info: <Info>Vous n'êtes déjà pas connecté !</Info> });
            return;
        }

        this.setState({ requesting: true });
        logout().then(() => {
            localStorage.removeItem("token");
            document.location.assign("/");
        }).catch(() => this.setState({
            requesting: false,
            info: <Info>Un problème est survenu !</Info>
        }));
    }

    render() {

        document.title = "Déconnexion | Raraph84";

        return <div>
            <div className="title">Déconnexion...</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}
        </div>;
    }
}

export class Account extends Component {

    constructor(props) {

        super(props);

        this.username = createRef();
        this.email = createRef();
        this.password = createRef();
        this.passwordVerify = createRef();
        this.avatar = createRef();

        this.state = { requesting: false, info: null, user: null, editing: false };
    }

    componentDidMount() {

        this.setState({ requesting: true });
        getUser("@me").then((user) => this.setState({ requesting: false, user })).catch((message) => {
            if (message === "Invalid token") {
                localStorage.removeItem("token");
                document.location.assign("/");
            } else this.setState({ requesting: false, info: <Info>Un problème est survenu !</Info> });
        });
    }

    render() {

        document.title = "Mon compte | Raraph84";

        return <div className="account">
            <div className="title">{document.title}</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            {!this.state.user ? null : <div>
                En développement !
                {/*
                <div>
                    <span>Nom d'utilisateur :</span>
                    <input type="text" ref={this.username} />
                </div>

                <div>
                    <span>Email :</span>
                    <input type="text" ref={this.email} />
                </div>

                <div>
                    <span>Mot de passe :</span>
                    <input type="password" ref={this.password} placeholder="Laisser vide pour ne pas modifier" autoComplete="new-password" />
                </div>

                {this.state.password ? <div>
                    <span>Retaper le mot de passe :</span>
                    <input type="password" ref={this.passwordVerify} />
                </div> : null}

                <div className="avatar">
                    <span>Avatar :</span>
                    <input type="file" id="avatarInput" accept=".png, .jpg, .jpeg, .gif" onChange={async (event) => this.setState({ avatar: await toBase64(event.target.files[0]) })} />
                    <div className="display" onClick={() => document.getElementById("avatarInput").click()}>
                        <img src={this.state.avatar} className="avatar" alt="Changer d'avatar" />
                        <span>Changer d'avatar</span>
                    </div>
                    <button className="button" style={{ display: this.state.avatar ? "" : "none" }} onClick={() => this.setState({ avatar: "" })}>Supprimer l'avatar</button>
                </div>

                <div className="buttons">
                    <button disabled={this.state.requesting}>{this.state.editing ? "Sauvegarder" : "Modifier"}</button>
                    <button disabled={this.state.requesting}>Supprimer mon compte</button>
                </div>
                */}
            </div>}
        </div>;
    }
}
import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { Info, Loading } from "./other";
import { login, createAccountP1, createAccountP2, logout, getUser } from "./api";

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

        this.email = createRef();
        this.cgu = createRef();

        this.username = createRef();
        this.password = createRef();
        this.passwordVerify = createRef();

        const params = new URLSearchParams(document.location.search);

        this.state = { requesting: false, info: null, code: params.get("code") || null };
    }

    render() {

        document.title = "Créer un compte | Raraph84";

        const sendVerificationEmail = () => {

            if (!this.cgu.current.checked) {
                this.setState({ info: <Info>Veuillez accepter les conditions générales d'utilisation !</Info> });
                return;
            }

            this.setState({ requesting: true, info: null });
            createAccountP1(this.email.current.value).then(() => {
                this.setState({ requesting: false, info: <Info color="rgba(0, 255, 0, 0.25)">Un email de confirmation vous a été envoyé !</Info> });
            }).catch((message) => this.setState({
                requesting: false,
                info: {
                    email_too_long: <Info>Cette adresse email est trop longue !</Info>,
                    invalid_email: <Info>Cette adresse email est invalide !</Info>,
                    email_already_used: <Info>Cette adresse email est déjà utilisée !</Info>,
                    too_many_creations: <Info>Trop de créations de comptes, réessayez plus tard !</Info>
                }[typeof message === "string" ? message.toLowerCase().replace(/ /g, '_') : ""] || <Info>Un problème est survenu !</Info>
            }));
        }

        const createAccount = () => {

            if (this.password.current.value !== this.passwordVerify.current.value) {
                this.setState({ info: <Info>Les mots de passe ne correspondent pas !</Info> });
                return;
            }

            this.setState({ requesting: true, info: null });
            createAccountP2(this.state.code, this.username.current.value, this.password.current.value).then((token) => {
                localStorage.setItem("token", token);
                document.location.assign("/");
            }).catch((message) => this.setState({
                requesting: false,
                info: {
                    invalid_or_expired_code: <Info>Code invalide ou expiré !</Info>,
                    username_already_used: <Info>Ce nom d'utilisateur est déjà utilisé !</Info>,
                    too_many_creations: <Info>Trop de créations de comptes, réessayez plus tard !</Info>
                }[typeof message === "string" ? message.toLowerCase().replace(/ /g, '_') : ""] || <Info>Un problème est survenu !</Info>
            }));
        }

        return <div className="login">
            <div className="title">Créer un compte</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            {!this.state.code ? <div>

                <div>
                    <span className="hint">Email :</span>
                    <input type="text" ref={this.email} disabled={this.state.requesting} maxLength={75} autoFocus onKeyPress={(event) => { if (event.code === "Enter") sendVerificationEmail(); }} />
                </div>

                <div>
                    <div className="hint">J'ai lu et accepté les <Link to="/cgu" className="link">conditions générales d'utilisation</Link> :</div>
                    <input type="checkbox" ref={this.cgu} disabled={this.state.requesting} />
                </div>

                <button disabled={this.state.requesting} onClick={sendVerificationEmail} className="button">Envoyer un email de vérification</button>

                <Link to="/login" className="link">J'ai déjà un compte</Link>

            </div> : <div>

                <div>
                    <span className="hint">Nom d'utilisateur :</span>
                    <input type="text" ref={this.username} disabled={this.state.requesting} maxLength={25} autoFocus onKeyPress={(event) => { if (event.code === "Enter") this.password.current.focus(); }} />
                </div>

                <div>
                    <span className="hint">Mot de passe :</span>
                    <input type="password" ref={this.password} disabled={this.state.requesting} onKeyPress={(event) => { if (event.code === "Enter") this.passwordVerify.current.focus(); }} />
                </div>

                <div>
                    <span className="hint">Retaper le mot de passe :</span>
                    <input type="password" ref={this.passwordVerify} disabled={this.state.requesting} onKeyPress={(event) => { if (event.code === "Enter") createAccount(); }} />
                </div>

                <button disabled={this.state.requesting} onClick={createAccount} className="button">Créer le compte</button>
            </div>}
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
import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { Info, Loading } from "./other";
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

        const login = () => {

            if (localStorage.getItem("token")) {
                this.setState({ info: <Info>Vous êtes déjà connecté !</Info> });
                return;
            }

            this.setState({ requesting: true, info: null });

            fetch("https://api.raraph84.ml/login", {
                method: "POST",
                body: JSON.stringify({
                    username: this.username.current.value,
                    password: this.password.current.value
                })
            }).then((res) => res.json()).then((res) => {

                if (res.code === 200) {
                    localStorage.setItem("token", res.token);
                    document.location.assign("/");
                } else {
                    this.setState({
                        requesting: false,
                        info: {
                            missing_username: <Info>Nom d'utilisateur manquant !</Info>,
                            missing_password: <Info>Mot de passe manquant !</Info>,
                            invalid_username_or_password: <Info>Nom d'utilisateur/mot de passe incorrect !</Info>,
                            too_many_login_fails: <Info>Trop d'essais de connexion, réessayez plus tard !</Info>,
                        }[res.message.toLowerCase().replace(/ /g, '_')] || <Info>Un problème est survenu !</Info>,
                    });
                }
            }).catch(() => this.setState({ requesting: false, info: <Info>Un problème est survenu !</Info> }));
        }

        return <div className="login">
            <div className="title">Connexion</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            <div>
                <span className="hint">Nom d'utilisateur/Email :</span>
                <input type="text" ref={this.username} autoFocus disabled={this.state.requesting} onKeyPress={(event) => { if (event.code === "Enter") this.password.current.focus(); }} />
            </div>

            <div>
                <span className="hint">Mot de passe :</span>
                <input type="password" ref={this.password} disabled={this.state.requesting} onKeyPress={(event) => { if (event.code === "Enter") login() }} />
            </div>

            <div><button disabled={this.state.requesting} onClick={login}>Se connecter</button></div>

            <Link to="/register"><span className="link">Je n'ai pas de compte</span></Link>
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

        const createAccount = () => {

            if (localStorage.getItem("token")) {
                this.setState({ info: <Info>Vous êtes déjà connecté !</Info> });
                return;
            }

            if (this.password.current.value !== this.passwordVerify.current.value) {
                this.setState({ info: <Info>Les mots de passe ne correspondent pas !</Info> });
                return;
            }

            this.setState({ requesting: true, info: null });
            fetch("https://api.raraph84.ml/createAccount", {
                method: "POST",
                body: JSON.stringify({
                    username: this.username.current.value,
                    email: this.email.current.value,
                    password: this.password.current.value,
                    acceptCgu: this.cgu.current.checked
                })
            }).then((res) => res.json()).then((response) => {

                if (response.code === 200) {
                    localStorage.setItem("token", response.token);
                    document.location.assign("/");
                } else {
                    this.setState({
                        requesting: false,
                        info: {
                            you_must_accept_cgu: <Info>Vous devez lire et accepter les conditions générales d'utilisation !</Info>,
                            missing_username: <Info>Nom d'utilisateur manquant !</Info>,
                            username_too_long: <Info>Le nom d'utilisateur doit faire moins de 25 caractères !</Info>,
                            username_already_exist/*s*/: <Info>Ce nom d'utilisateur est déjà utilisé !</Info>,
                            missing_email: <Info>Email manquante !</Info>,
                            invalid_email: <Info>Email invalide !</Info>,
                            email_already_exist/*s*/: <Info>Cette adresse email est déjà utilisé !</Info>,
                            missing_password: <Info>Mot de passe manquant !</Info>,
                            invalid_username_or_password: <Info>Nom d'utilisateur/mot de passe incorrect !</Info>,
                            please_wait_one_day_to_create_another_account: <Info>Trop de créations de comptes, réessaye plus tard !</Info>,
                        }[response.message.toLowerCase().replace(/ /g, '_')] || <Info>Un problème est survenu !</Info>,
                    });
                }
            });
        }

        return <div className="login">
            <div className="title">Créer un compte</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

            <div>
                <span className="hint">Nom d'utilisateur :</span>
                <input type="text" ref={this.username} disabled={this.state.requesting} />
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
                <div className="hint">J'ai lu et accepté les <Link to="/cgu"><span className="link">conditions générales d'utilisation</span></Link> :</div>
                <input type="checkbox" ref={this.cgu} disabled={this.state.requesting} />
            </div>

            <div><button onClick={createAccount}>Créer le compte</button></div>

            <Link to="/login"><span className="link">J'ai déjà un compte</span></Link>
        </div>;
    }
}

export class Logout extends Component {

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

// Classe à refaire
export class Account extends Component {

    constructor(props) {

        super(props);

        this.username = createRef();
        this.email = createRef();
        this.password = createRef();
        this.passwordVerify = createRef();
        this.avatar = createRef();

        this.state = { requesting: false, info: null, avatar: null, password: false };
    }

    componentDidMount() {
        fetch("https://api.raraph84.ml/users/@me", { headers: { authorization: localStorage.getItem("token") } }).then((res) => res.json()).then((res) => {
            if (res.code === 200)
                this.setState({ avatar: "https://api.raraph84.ml/avatar/" + res.userId });
            else if (res.code === 401)
                localStorage.removeItem("token");
        });
    }

    render() {

        document.title = "Mon compte | Raraph84";

        return <div className="account">
            <div className="title">Mon compte</div>

            {this.state.requesting ? <Loading /> : null}
            {this.state.info}

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
                <input type="password" ref={this.password} placeholder="Ne pas modifier" autoComplete="new-password" />
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
                <button className="button">Enregistrer</button>
                <button className="button">Supprimer mon compte</button>
            </div>
        </div>;
    }
}

const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", (error) => reject(error));
});
import React from "react";
import { Status } from "./other";
import { toBase64 } from "./utils";

export class AccountPage extends React.Component {

    constructor(props) {

        super(props);

        document.title = "Mon compte | Raraph84";

        this.state = { status: null, avatar: null, password: false };
    }

    componentDidMount() {

        fetch("https://api.raraph84.ml/user", { headers: { authorization: localStorage.getItem("token") } }).then((res) => res.json()).then((res) => {

            if (res.code === 200) {
                document.getElementById("username").value = res.username;
                document.getElementById("email").value = res.email;
                this.setState({ avatar: "https://api.raraph84.ml/avatar?userId=" + res.userId });
            }
            else if (res.code === 401) document.location.assign("/login");
            else this.setState({ status: "Une erreur est survenue !" });
        });
    }

    render() {
        return <div className="accountPage">

            <link rel="stylesheet" href="/style/accountPage.css" />

            <div className="title">Mon compte</div>
            {this.state.status ? <Status message={this.state.status} animate /> : ""}

            <div>
                <span>Nom d'utilisateur :</span>
                <input type="text" id="username" />
            </div>

            <div>
                <span>Email :</span>
                <input type="text" id="email" />
            </div>

            <div>
                <span>Mot de passe :</span>
                <input type="password" id="password" placeholder="Ne pas changer" autoComplete="new-password" onInput={() => this.setState({ password: document.getElementById("password").value.length > 0 })} />
            </div>

            <div style={{ display: this.state.password ? "" : "none" }}>
                <span>Retaper le mot de passe :</span>
                <input type="password" id="password2" />
            </div>

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
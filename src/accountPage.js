import React from "react";
import { Status } from "./other";
import { changeAvatar, changeEmail, changeUsername, getUser } from "./accountUtils";
import { toBase64 } from "./utils";
import "./accountPage.css";

export class AccountPage extends React.Component {

    constructor(props) {

        super(props);

        document.title = "Mon compte | Raraph84";

        this.state = { status: "", avatar: "" };
    }

    componentDidMount() {

        getUser().then((user) => {

            document.getElementById("username").value = user.username;
            document.getElementById("email").value = user.email;
            this.setState({ avatar: "https://api.raraph84.ml/avatar?userId=" + user.userId });

        }).catch((error) => {
            if (error.code === 401)
                document.location.assign("/login");
            else
                this.setState({ status: "Une erreur est survenue !" });
        });
    }

    render() {

        const saveUsername = () => {
            this.setState({ status: "" });
            changeUsername(document.getElementById("username").value)
                .then(() => document.location.reload())
                .catch((error) => {
                    if (error.code === 401)
                        document.location.assign("/login");
                    else if (error.message === "Username has not changed")
                        this.setState({ status: "Le nom d'utilisateur n'a pas changé !" });
                    else if (error.message === "This username is already used")
                        this.setState({ status: "Ce nom d'utilisateur est déjà utilisé !" });
                    else
                        this.setState({ status: "Une erreur est survenue !" });
                });
        }

        const saveEmail = () => {
            this.setState({ status: "" });
            changeEmail(document.getElementById("email").value)
                .then(() => document.location.reload())
                .catch((error) => {
                    if (error.code === 401)
                        document.location.assign("/login");
                    else if (error.message === "Email has not changed")
                        this.setState({ status: "L'email n'a pas changée !" });
                    else if (error.message === "This email is already used")
                        this.setState({ status: "Cette email est déjà utilisée !" });
                    else
                        this.setState({ status: "Une erreur est survenue !" });
                });
        }

        const saveAvatar = () => {
            if (this.state.avatar.startsWith("https://")) {
                this.setState({ status: "L'avatar n'a pas changé !" });
                return;
            }
            this.setState({ status: "" });
            changeAvatar(this.state.avatar)
                .then(() => document.location.reload())
                .catch((error) => {
                    if (error.code === 401)
                        document.location.assign("/login");
                    else if (error.message === "Unsupported image type")
                        this.setState({ status: "Ce format n'est pas pris en charge !" });
                    else
                        this.setState({ status: "Une erreur est survenue !" });
                });
        }

        const inputAvatarHandler = async (event) => this.setState({ avatar: await toBase64(event.target.files[0]) });

        return <div>
            <div className="title">Mon compte</div>
            {this.state.status ? <Status message={this.state.status} animate /> : ""}

            <div>
                Nom d'utilisateur : <input type="text" id="username" onKeyPress={(e) => { if (e.key === "Enter") saveUsername(); }} />
                <button className="button" onClick={() => saveUsername()}>Mettre à jour</button>
            </div>

            <div>
                Email : <input type="text" id="email" onKeyPress={(e) => { if (e.key === "Enter") saveEmail(); }} />
                <button className="button" onClick={() => saveEmail()}>Mettre à jour</button>
            </div>

            <div>
                <input type="file" id="avatarInput" accept=".png, .jpg, .jpeg, .gif" onChange={inputAvatarHandler} />
                <div className="avatar" onClick={() => document.getElementById("avatarInput").click()}>
                    <img src={this.state.avatar} className="avatar" alt="Changer d'avatar" />
                    <span>Changer d'avatar</span>
                </div>
                <div className="avatarButtons">
                    <button className="button" onClick={() => this.setState({ avatar: "" })}>Supprimer l'avatar</button>
                    <button className="button" onClick={() => saveAvatar()}>Mettre à jour</button>
                </div>
            </div>

        </div>;
    }
}
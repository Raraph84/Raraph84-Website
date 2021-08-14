import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export class Home extends React.Component {

    constructor(props) {

        super(props);

        document.title = "Accueil | Raraph84";
    }

    render() {

        return <div>
            <div className="title">Accueil</div>

            <div className="subtitle">Salut !</div>
            <ul>
                <div>Je suis développeur :</div>
                <li>JavaScript (Front : React, Back/Bot Discord : NodeJS)</li>
                <li>Java (Plugins Minecraft)</li>
                <li>Bash (Linux)</li>
                <li>HTML/CSS</li>
            </ul>

            <div className="subtitle">Mes projets</div>
            <div className="box">
                <Link className="link" to={{ pathname: "https://eclipsia.fr/" }} target="_blank">Eclipsia</Link>
                <img alt="Logo Eclipsia" src="https://eclipsia.fr/imgs/logo.png"></img>
                <div className="description">
                    Eclipsia est un serveur Mini-Jeux créé<br />
                    par des amis. Je suis développeur et administrateur.
                </div>
            </div>
            <div className="box">
                <Link className="link" to={{ pathname: "https://discord.gg/5vZxSUy" }} target="_blank">Cubik Market</Link>
                <img alt="Logo Cubik" src="/imgs/logo-cubik.png"></img>
                <div className="description">
                    Le Cubik Market est un market Paladium entièrement<br />
                    réalisé sur Discord. Je suis développeur du bot et administrateur.
                </div>
            </div>

            <div className="subtitle">Me contacter</div>
            <div>
                Mon serveur Discord : <Link className="link" to={{ pathname: "https://discord.gg/MRjDxpx" }} target="_blank">https://discord.gg/MRjDxpx</Link><br />
                Mon adresse Email : <a className="link" href="mailto:raraph84@gmail.com">raraph84@gmail.com</a>
            </div>
        </div>;
    }
}
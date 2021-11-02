import React from "react";

import "./styles/home.scss";

export class Home extends React.Component {
    render() {

        document.title = "Accueil | Raraph84";

        return <div className="home">
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
            <div className="projects">
                <a href="https://eclipsia.fr/" target="_blank" rel="noreferrer" className="box project">
                    <div className="title link">Eclipsia</div>
                    <img alt="Logo Eclipsia" src="/imgs/eclipsia-logo.png"></img>
                    <div className="description">
                        Eclipsia est un serveur Mini-Jeux créé par des amis. Je suis développeur et administrateur.
                    </div>
                </a>
                <a href="https://discord.gg/5vZxSUy" target="_blank" rel="noreferrer" className="box project">
                    <div className="title link">Cubik Market</div>
                    <img alt="Logo Cubik Market" src="/imgs/cubikmarket-logo.png"></img>
                    <div className="description">
                        Le Cubik Market est un market Paladium entièrement réalisé sur Discord. Je suis développeur du bot et administrateur.
                    </div>
                </a>
            </div>

            <div className="subtitle">Me contacter</div>
            <div className="contactme">
                <div>
                    Mon serveur Discord : <a href="https://discord.gg/MRjDxpx" target="_blank" rel="noreferrer"><span className="link">https://discord.gg/MRjDxpx</span></a>
                </div>
                <div>
                    Mon adresse Email : <a href="mailto:raraph84@gmail.com"><span className="link">raraph84@gmail.com</span></a>
                </div>
            </div>
        </div>;
    }
}
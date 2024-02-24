import { Component } from "react";

import "./styles/home.scss";

export class Home extends Component {
    render() {

        document.title = "Accueil | Raraph84";

        return <div className="home">
            <div className="title">Accueil</div>

            <div className="subtitle">Salut !</div>
            <ul>
                <div>Je suis développeur :</div>
                <li>De sites web (Front : ReactJS, Back : NodeJS)</li>
                <li>De plugins Minecraft (Java)</li>
                <li>De launchers Minecraft (Java/ElectronJS)</li>
                <li>Et d'autres choses...</li>
            </ul>

            <div className="subtitle">Mes projets</div>
            <div className="projects">
                <Project link="https://www.eclipsia.fr/" name="Eclipsia" imageUrl="/imgs/projects/logo-eclipsia.png" description="Eclipsia est un serveur Minecraft Mini-Jeux créé par des amis." />
                <Project link="https://www.polycube.fr/" name="Polycube" imageUrl="/imgs/projects/logo-polycube.png" description="Polycube propose des services de solutions d'hébergements. Profitez d'offres pas chères pour monter votre projet." />
            </div>
        </div>;
    }
}

class Project extends Component {
    render() {
        return <a href={this.props.link} target="_blank" rel="noreferrer" className="box link-container">
            <div className="box-title link">{this.props.name}</div>
            <img alt="Logo" src={this.props.imageUrl}></img>
            <div>{this.props.description}</div>
        </a>
    }
}

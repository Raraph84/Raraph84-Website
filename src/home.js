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
                <li>De launcher Minecraft (Java/ElectronJS)</li>
                <li>Et d'autres choses...</li>
            </ul>

            <div className="subtitle">Mes projets</div>
            <div className="projects">
                <Project link="https://eclipsia.fr/" name="Eclipsia" imageUrl="/imgs/logo-eclipsia.png" description="Eclipsia est un serveur Minecraft Mini-Jeux créé par des amis." />
                <Project link="https://discord.gg/AKMzGb9" name="DommiossGroup" imageUrl="/imgs/logo-dommiossgroup.png" description="Le DommiossGroup est un groupe de projets web et Minecraft fondé en 2018, développant actuellement un CMS et un serveur Minecraft Roleplay." />
                <Project link="https://discord.gg/5vZxSUy" name="Cubik Market" imageUrl="/imgs/logo-cubik-market.png" description="Le Cubik Market est un market pour le serveur Minecraft Paladium entièrement réalisé et automatisé sur Discord." />
                <Project link="https://discord.gg/HQKUWDe" name="Discord Colonies" imageUrl="/imgs/logo-discord-colonies.png" description="Discord Colonies est un serveur Discord où l'on peut créer son pays, farmer des ressources, coloniser etc." />
                <Project link="https://discord.gg/GWFzTcN" name="Pala's Fun" imageUrl="/imgs/logo-palas-fun.png" description="Pala's Fun est un Bot Discord en rapport avec le serveur Minecraft Paladium." />
            </div>
        </div>;
    }
}

class Project extends Component {
    render() {
        return <a href={this.props.link} target="_blank" rel="noreferrer" className="box project link-container">
            <div className="title link">{this.props.name}</div>
            <img alt={"Logo " + this.props.name} src={this.props.imageUrl}></img>
            <div className="description">{this.props.description}</div>
        </a>
    }
}

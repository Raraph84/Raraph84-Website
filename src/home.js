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
                <Project link="https://eclipsia.fr/" name="Eclipsia" imageUrl="/imgs/projects/logo-eclipsia.png" description="Eclipsia est un serveur Minecraft Mini-Jeux créé par des amis." />
                <Project link="https://discord.gg/AKMzGb9" name="Groupe Dommioss" imageUrl="/imgs/projects/logo-dommioss-group.png" description="Dommioss est un groupe de développeurs fondé en 2018 travaillants sur divers projets tels que des serveurs Minecraft ou encore le CMS DomCord." />
                <Project link="https://discord.gg/5vZxSUy" name="Cubik Pub" imageUrl="/imgs/projects/logo-cubik-pub.png" description="Le Cubik Pub est un serveur Discord de publicité avec de petits cooldown pour booster ton serveur ou tes projets." />
                <Project link="https://discord.gg/HQKUWDe" name="Discord Colonies" imageUrl="/imgs/projects/logo-discord-colonies.png" description="Discord Colonies est un serveur Discord où l'on peut créer son pays, farmer des ressources, coloniser etc." />
                <Project link="https://discord.gg/GWFzTcN" name="Pala's Fun" imageUrl="/imgs/projects/logo-palas-fun.png" description="Pala's Fun est un Bot Discord en rapport avec le serveur Minecraft Paladium." />
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

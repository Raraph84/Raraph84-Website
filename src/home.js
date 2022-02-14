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
                <li>JavaScript (Front : React, Back/Bot Discord : NodeJS)</li>
                <li>Java (Plugins Minecraft)</li>
                <li>Bash (Linux)</li>
                <li>HTML/CSS</li>
            </ul>

            <div className="subtitle">Mes projets</div>
            <div className="projects">
                <Project link="https://eclipsia.fr/" name="Eclipsia" pid="eclipsia" descripion="Eclipsia est un serveur Mini-Jeux créé par des amis." />
                <Project link="https://discord.gg/AKMzGb9" name="DommiossGroup" pid="dommiossgroup" description="Le DommiossGroup est un groupe de projets web et Minecraft fondé en 2018, développant actuellement un CMS et un serveur Minecraft Roleplay." />
                <Project link="https://discord.gg/5vZxSUy" name="Cubik Market" pid="cubik-market" description="Le Cubik Market est un market Paladium entièrement réalisé sur Discord." />
                <Project link="https://discord.gg/HQKUWDe" name="Discord Colonies" pid="discord-colonies" description="Serveur Discord où l'on peut créer son pays, farmer des ressources, coloniser etc." />
                <Project link="https://discord.gg/GWFzTcN" name="Pala's Fun" pid="palas-fun" description="Bot Discord en rapport avec Paladium." />
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

class Project extends Component {
    render() {
        return <a href={this.props.link} target="_blank" rel="noreferrer" className="box project">
            <div className="title link">{this.props.name}</div>
            <img alt={"Logo " + this.props.name} src={"/imgs/logo-" + this.props.pid + ".png"}></img>
            <div className="description">{this.props.description}</div>
        </a>
    }
}

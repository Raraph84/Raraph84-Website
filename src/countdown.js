import { Component, createRef } from "react";

import "./styles/countdown.scss";

export class Countdown extends Component {

    constructor(props) {

        super(props);

        this.dateTimeInputRef = createRef();
        this.endMessageInputRef = createRef();
        this.resultDivRef = createRef();

        this.state = { countdown: null };
    }

    componentDidMount() {
        this.updateCountdown();
        document.addEventListener("fullscreenchange", () => this.onFullscreenChange());
        window.addEventListener("resize", () => this.onResize());
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
        document.removeEventListener("fullscreenchange", () => this.onFullscreenChange());
        window.removeEventListener("resize", () => this.onResize());
    }

    onFullscreenChange() {
        this.updateCountdown();
    }

    onResize() {
        this.updateSize();
    }

    updateCountdown() {

        if (!this.dateTimeInputRef.current || !this.endMessageInputRef.current) return;

        const date = new Date(this.dateTimeInputRef.current.value).getTime();

        if (Date.now() >= date) {
            this.setState({ countdown: this.endMessageInputRef.current.value }, () => this.updateSize());
            return;
        }

        let time = (date - Date.now() + 1000) / 1000;

        const result = [];
        const units = [
            {
                timeInSeconds: 365 * 24 * 60 * 60,
                singularName: "an",
                plurialName: "ans"
            },
            {
                timeInSeconds: 30 * 24 * 60 * 60,
                singularName: "mois",
                plurialName: "mois"
            },
            {
                timeInSeconds: 24 * 60 * 60,
                singularName: "jour",
                plurialName: "jours"
            },
            {
                timeInSeconds: 60 * 60,
                singularName: "heure",
                plurialName: "heures"
            },
            {
                timeInSeconds: 60,
                singularName: "minute",
                plurialName: "minutes"
            },
            {
                timeInSeconds: 1,
                singularName: "seconde",
                plurialName: "secondes"
            }
        ].sort((a, b) => b.timeInSeconds - a.timeInSeconds);

        units.forEach((unit) => {

            let unitNumber = 0;
            while (time >= unit.timeInSeconds) {
                unitNumber++;
                time -= unit.timeInSeconds;
            }

            if (unitNumber > 0)
                result.push(unitNumber + " " + (unitNumber > 1 ? unit.plurialName : unit.singularName));
        });

        this.setState({ countdown: result.join("\n") }, () => this.updateSize());

        this.timeout = setTimeout(() => this.updateCountdown(), 500);
    }

    updateSize() {

        const element = this.resultDivRef.current;

        if (!element) {
            this.props.setHeaderAndFooterEnabled(true);
            return;
        }

        this.props.setHeaderAndFooterEnabled(false);

        element.style.fontSize = "250px";
        while (element.clientWidth > element.parentElement.clientWidth)
            element.style.fontSize = (parseInt(element.style.fontSize) - 5) + "px";
        while (element.clientHeight > element.parentElement.clientHeight)
            element.style.fontSize = (parseInt(element.style.fontSize) - 5) + "px";
    }

    render() {

        if (document.title !== "Décompte | Raraph84") document.title = "Décompte | Raraph84";

        const defaultDatetime = new Date(new Date(`01/01/${new Date().getFullYear() + 1}`).getTime() - new Date().getTimezoneOffset() * 60000).toISOString().substring(0, 19);

        const requestFullscreen = () => {
            try {
                document.documentElement.requestFullscreen();
            } catch (error) {
            }
        }

        return <div className="countdown">

            {!document.fullscreenElement ? <div className="title">Décompte</div> : null}

            <div className="config" style={{ display: !document.fullscreenElement ? "" : "none", fontSize: "" }}>
                <div>
                    <div className="hint">Date :</div>
                    <input type="datetime-local" ref={this.dateTimeInputRef} step="1" defaultValue={defaultDatetime} onChange={() => this.updateCountdown()} />
                </div>
                <div>
                    <div className="hint">Message de fin :</div>
                    <input type="text" ref={this.endMessageInputRef} defaultValue="Bonne Année !" onChange={() => this.updateCountdown()} />
                </div>
            </div>

            {this.state.countdown && !document.fullscreenElement
                ? <div className="result">{this.state.countdown.split("\n").map((line, index) => <div key={index}>{line}</div>)}</div>
                : (this.state.countdown
                    ? <div className="fullscreen"><div className="result" ref={this.resultDivRef}>{this.state.countdown.split("\n").map((line, index) => <div key={index}>{line}</div>)}</div></div>
                    : null)}

            {!document.fullscreenElement ? <button className="button" onClick={() => requestFullscreen()}>Plein écran</button> : null}

        </div>;
    }
}

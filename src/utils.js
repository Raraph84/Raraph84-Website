import React from "react";

let requests = 0;
const updateLoadingScreen = (startReq) => {
    requests += startReq ? 1 : -1;
    document.getElementById("loading").style.display = requests > 0 ? "" : "none";
}

export const post = (url, data) => new Promise((resolve, reject) => {

    updateLoadingScreen(true);

    let request = new XMLHttpRequest();

    request.open("POST", "https://api.raraph84.ml" + url);

    request.addEventListener("load", () => {

        try {
            resolve(JSON.parse(request.response));
        } catch (error) {
            resolve(request.response);
        }

        updateLoadingScreen(false);
    });

    request.send(data);
});

export class NoIcon extends React.Component {

    constructor(props) {

        super(props);

        let text = props.name.split(" ").map((val) => val[0]).join("");
        if (text.length > 3) text = text.slice(0, 3);

        this.state = {
            text: text,
            size: props.size
        };
    }

    render() {

        let style = {
            lineHeight: this.state.size + "px",
            height: this.state.size + "px",
            width: this.state.size + "px",
            borderRadius: (this.state.size / 2) + "px"
        };

        return <span className="noIcon" style={style}><span className="text">{this.state.text}</span></span>;
    }
}

/**
 * @param {HTMLElement} element 
 * @param {String} animationName 
 * @param {String} duration 
 */
export const animate = (element, animationName, duration = "1s") => new Promise((resolve, reject) => {

    element.style.animationDuration = duration;
    element.classList.add("animate__animated", "animate__" + animationName);

    element.addEventListener("animationend", () => {

        element.classList.remove("animate__animated", "animate__" + animationName);
        resolve();

    }, { once: true });
});

export const toBase64 = (file) => new Promise((resolve, reject) => {

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", (error) => reject(error));
});
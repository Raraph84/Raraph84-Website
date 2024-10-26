import { Component, createRef } from "react";

import "./styles/passwdgen.scss";

export class PasswdGen extends Component {

    constructor(props) {

        super(props);

        this.lengthInputRef = createRef();

        this.state = { password: "Clique pour générer", copied: null };
    }

    render() {

        document.title = "Générateur de mots de passe | Raraph84";

        const generateHandler = () => {

            const length = parseInt(this.lengthInputRef.current.value);
            if (isNaN(length)) {
                this.setState({ password: "La longueur est invalide !", copied: null });
                return;
            }

            if (length < 1) {
                this.setState({ password: "La longueur doit être supérieure à 0 !", copied: null });
                return;
            }

            if (length > 1000) {
                this.setState({ password: "La longueur doit être inférieure à 1000 !", copied: null });
                return;
            }

            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let password = "";
            for (let i = 0; i < length; i++) password += chars.charAt(Math.floor(Math.random() * chars.length));
            this.setState({ password, copied: null });
        };

        const copyHandler = () => {
            try {
                navigator.clipboard.writeText(this.state.password);
                this.setState({ copied: true });
            } catch (error) {
                this.setState({ copied: false });
            }
            setTimeout(() => this.setState({ copied: null }), 1000);
        };

        return <div className="passwdgen-page">

            <div className="title">Générateur de mots de passe</div>

            <div className="config">
                <div className="hint">Longueur :</div>
                <input type="number" ref={this.lengthInputRef} defaultValue="10"
                    onKeyDown={(event) => event.key === "Enter" && generateHandler()} />
            </div>

            <div className="result">{this.state.password}</div>

            <div className="buttons">
                <button className="button" onClick={generateHandler}>Générer</button>
                <button className="button" onClick={copyHandler}>{this.state.copied === null ? "Copier" : (this.state.copied ? "Copié !" : "Impossible de copier")}</button>
            </div>

        </div>;
    }
}

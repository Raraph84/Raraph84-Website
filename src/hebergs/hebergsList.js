import { Component } from "react";
import { Link } from "react-router-dom";

// Classe à refaire
export class HebergList extends Component {

    constructor(props) {

        super(props);

        document.title = "Mes hébergements | Raraph84";

        this.state = { status: null, hebergs: [] };
    }

    componentDidMount() {

        fetch("https://api.raraph84.ml/hebergs", { headers: { authorization: localStorage.getItem("token") } }).then((result) => {

            if (result.code === 200) {

                const hebergs = result.hebergs.map((val) => <div key={val.id}>
                    <Link className="box" to={"/hebergs/" + val.id}>
                        {val.name} <i className="fas fa-dot-circle" style={{ color: val.online ? "green" : "red" }} />
                    </Link>
                </div>);

                this.setState({ hebergs: hebergs });

            } else if (result.code === 401)
                document.location.assign("/login");
            else
                this.setState({ status: "Une erreur est survenue !" });
        });
    }

    render() {

        return <div>
            <div className="title">Mes hébergements</div>
            {this.state.status ? <Status message={this.state.status} animate /> : ""}

            <div>{this.state.hebergs[0] ? this.state.hebergs : "Vous n'avez aucun hébergement !"}</div>
        </div>;
    }
}
import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

    constructor(){
        super();
        this.state = {notas:[]};
        this._novNot = this._novasNotas.bind(this);
    }

    componentDidMount(){
        this.props.notas.inscrever(this._novNot);
    }

    componentWillUnmount(){
        this.props.notas.desinscrever(this._novNot);
    }

    _novasNotas(notas){
        this.setState({...this.state, notas});
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota 
                               indice={index}
                               categoria={nota.categoria}
                               apagarNota={this.props.apagarNota}
                               titulo={nota.titulo}
                               texto={nota.texto}                
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }

}

export default ListaDeNotas;

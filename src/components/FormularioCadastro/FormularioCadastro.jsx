import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.nota = "";
        this.categoria = "Sem Categoria";
    }

    _handleMudancaTitulo(evento)  {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.nota = evento.target.value;
    }

    _handleMudancaCategoria(evento) {
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();

        this.props.criarNota(this.titulo, this.nota, this.categoria)
    }

    render() {
        return (
            <form className="form-cadastro"
                  onSubmit={this._criarNota.bind(this)}
             >

                <select className="form-cadastro_input" onChange={this._handleMudancaCategoria.bind(this)}>
                    <option value="Sem Categoria">Sem Categoria</option>
                    {this.props.categorias.map((categoria,index) => {
                        return <option key={index} value={categoria}>{categoria}</option>
                    })}
                </select>

                <input 
                    type="text" 
                    placeholder="Título" 
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota..." 
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit" type="submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;
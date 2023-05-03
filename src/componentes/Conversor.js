import React, { Component } from "react";
import "./Conversor.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };
    this.converter = this.converter.bind(this);
  }

  converter() {
    let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
    let de_para_moedas = `${this.props.moedaA}${this.props.moedaB}`;
    let url = `https://economia.awesomeapi.com.br/json/last/${de_para}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let cotacao = json[de_para_moedas].bid;
        let moedaB_valor = (
          parseFloat(this.state.moedaA_valor) * cotacao
        ).toFixed(2);
        this.setState({ moedaB_valor });
      });
  }

  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moedaA} para {this.props.moedaB}
        </h2>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ moedaA_valor: e.target.value });
          }}
        />
        <input type="button" value="Converter" onClick={this.converter} />
        <h2>Valor convertido: {this.state.moedaB_valor}</h2>
      </div>
    );
  }
}

import React, { useState } from "react";
import "./Conversor.css";

export default function ConversorF(props) {
  const [moedaA_valor, setMoedaA_valor] = useState();
  const [moedaB_valor, setMoedaB_valor] = useState();

  const converter = () => {
    let de_para = `${props.moedaA}-${props.moedaB}`;
    let de_para_moedas = `${props.moedaA}${props.moedaB}`;
    let url = `https://economia.awesomeapi.com.br/json/last/${de_para}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let cotacao = json[de_para_moedas].bid;

        let moedaB_valor = (parseFloat(moedaA_valor) * cotacao).toFixed(2);
        setMoedaB_valor(moedaB_valor);
      });
  };

  return (
    <div className="conversor">
      <h2>
        {props.moedaA} para {props.moedaB}
      </h2>

      <input
        type="text"
        onChange={(e) => {
          setMoedaA_valor(e.target.value);
        }}
      />
      <input
        type="button"
        value="Converter"
        onClick={() => {
          converter();
        }}
      />

      <h2>Valor convertido: {moedaB_valor}</h2>
    </div>
  );
}
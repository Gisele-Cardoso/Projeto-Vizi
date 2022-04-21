import { useEffect, useState } from "react";
import api from "../service/api";
import * as React from "react";

export default function Pagamentos() {
   const [state, setState] = useState({ 'payments': [] });

  useEffect(() => {
    api
      .get("/payments")
      .then((response) => {
        setState({ 'payments': response.data })

      }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      }, []);
  })
  return (
    <div class="Produtos">
      <h1>Produtos Vizi:</h1>
      {state.payments.map((pagamentos) => 
      <div class="produto-nome" key="{pagamentos.id}">
          <span class="descricao-produto">{pagamentos.paymentDate}</span>
          <span class="descricao-produto">{pagamentos.amount}</span>
          <span class="descricao-produto">{pagamentos.status}</span><button>Ver detalhes</button></div>)}
      </div>
  ); 
}
import { useEffect, useState } from "react";
import api from "../service/api";

export default function DatalhePagamento() {
  const [state, setState] = useState({'products': [], 'id': "", "openFridge":"","closeFridge":""});
  const [payments, setPayments] = useState({'paymentDate': "", 'id': "", "transactionId":"","amount":"", "status": ""});

  useEffect(() => {
    api
      .get("/transactions/l1eddsxevvk5o6acysd")
      .then((response) => {
        setState({ 'products': response.data.products, 'idTrans': response.data.id, "openFridge": response.data.openFridge,"closeFridge": response.data.closeFridge})
      }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    api
      .get("/payments/l1edk4tmlybbn4ffne9")
      .then((response) => {
        setPayments({ 'paymentDate': response.data.paymentDate, 'id': response.data.id, "transactionId": response.data.transactionId,"amount": response.data.amount, "status": response.data.status})
      }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  },[])
  return (
    <div class="Produtos">
      <h1>Produtos Vizi:</h1>
      <div class="produto-nome" key="{state?.id}">
          <span class="descricao-produto">Data de pagamento: {payments.paymentDate}</span>
          <span class="descricao-produto">Valor pago: {payments.amount}</span>
          <span class="descricao-produto">Abertura do freezer: {state?.openFridge}</span>
          <span class="descricao-produto">Fechamento do freezer: {state?.closeFridge}</span>
        {state.products.map((produto, i) => 
          <div class="produto-nome" key={i}>
            <div class="produto-imagem">
              <img alt="descrição" width="50" height="80" src={produto.thumb}></img>
            </div>
            <div>
              <span class="descricao-produto">{produto.name}</span>
              <span class="descricao-preco">Preço: {produto.price}</span>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
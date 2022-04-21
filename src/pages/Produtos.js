import './Produtos.css';
import { useEffect, useState } from "react";
import api from "../service/api";

export default function Home() {
  const [state, setState] = useState({ 'products': [] });

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setState({ 'products': response.data })

      }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      },[]);
  })
  return (
    <div class="Produtos">
      <h1>Produtos Vizi:</h1>
      <button>Destrancar</button>
      {state.products.map((produto) => 
      <div class="produto-nome" key="{produto.id}">

        
        <div class="produto-imagem">
          <img alt="descrição" width="50" height="80" src={produto.thumb}></img>
        </div>
          <span class="descricao-produto">{produto.name}</span>
          <span class="descricao-preco">Preço: {produto.price}</span></div>)}


      </div>

      
  );
}
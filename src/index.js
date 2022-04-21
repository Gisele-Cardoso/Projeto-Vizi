import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Produtos from './pages/Produtos';
import reportWebVitals from './reportWebVitals';
import Pagamento from './pages/Pagamento'
import DetalhePagamento from './pages/DetalhePagamento'


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="pagamento" element={<Pagamento />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="detalhepagamento" element={<DetalhePagamento />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

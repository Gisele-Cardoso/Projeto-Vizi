import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/pagamento">Pagamento</Link>
          </li>
          <li>
            <Link to="/detalhepagamento">Transação</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;
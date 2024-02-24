import { useContext } from "react";

import { PizzasContext } from "../../context/RestauranteContext";
import Cartas from '../../components/cartas/Cartas';
import Buscando from '../../components/buscando/Buscando';

// importación de Footer
import Footer from '../../components/footer/Footer';

import './Home.css';

const Home = () => {
  const { pizzas }  = useContext(PizzasContext);

  return (
    <div className="home">
      <header className="banner">
        <h1 className="fw-bold">Prestaurante</h1>
        <p className="fw-bold fs-5">¡La mejor variedad para su paladar!</p>
      </header>
      <section className="cards">
        { pizzas ? pizzas.map((pizza, index) => <Cartas key={index} pizza={pizza} />) : <Buscando />}
      </section>
      {/* inclusión de Footer */}
      <Footer />
    </div>
  )
}

export default Home
import { useContext } from "react";
// import { Container } from 'react-bootstrap'

// import ScrollReveal from 'scrollreveal';

import { RestauranteContext } from "../../context/RestauranteContext";

import Cartas from '../cartas/Cartas'
import Buscando from '..//buscando/Buscando';
import Header from "../header/Header";
import Carrusel from "../carrusel/Carrusel";

import 'bootstrap/dist/css/bootstrap.min.css'

// importación de Footer
import Footer from '../../components/footer/Footer';

import './Home.css';


const RestauranteHome = () => {
  const { platos }  = useContext(RestauranteContext);

  return (
    <div className="home">
      <Header />
      <Carrusel />
      <section className="cartas">
        { platos ? platos.map((plato, indice) => <Cartas key={ indice } plato={ plato } />) : <Buscando />}
      </section>
      {/* inclusión de Footer */}
      <Footer />
    </div>
  )
}

export default RestauranteHome
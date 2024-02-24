import { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

import { RestauranteContext } from '../../context/RestauranteContext'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import './detalleDelPlato.css';
import '../home/RestauranteHome';

const PizzaDetalle = () => {
  const { id } = useParams();

  const navigatePizza = useNavigate();
  const { pizzas, agregarAlCarrito } = useContext(PizzasContext);

  useEffect(() => {
    const encontrarPizza = pizzas.find(pizza => pizza.id === id);

    if(!encontrarPizza) {    
      return (
        navigatePizza('/')
      )
    }
  }, [id]);

  const pizzaIndex = pizzas.findIndex(e => e.id === id);

  const detalleDelPlato = pizzas[pizzaIndex];

  return (
    <div>
      {/* <h1>{encontrarPizza ? <div>El pizza está bien</div> : undefined}</h1> */}
      {detalleDeLaPizza ? (
        <section className='detalles mt-5 pt-3 bg-primary'>
          <img src={detalleDeLaPizza.img} style={{width: '100%'}}></img>
          <div>
            <div className='h1'>{detalleDeLaPizza.name.charAt(0).toUpperCase() + detalleDeLaPizza.name.slice(1)}</div>
            <p className='description'>
              { detalleDeLaPizza.desc }
            </p>
            <p className='fs-4 fw-bold text-start'>
              Ingredientes:
            </p>
            <ul>
              { detalleDeLaPizza.ingredients.map( (ingrediente, index) => <li key={index}>{ingrediente}</li> ) }
            </ul>
            <section className='d-flex justify-content-around'>
              <p className='fs-1 fw-bold'>
                Precio: $ { detalleDeLaPizza.price.toLocaleString('cl-CL') }
              </p>
              <p>
                <Button className='btn btn-success' onClick={() => agregarAlCarrito(detalleDeLaPizza)}>
                  Agregar 🛒
                </Button>
              </p>
              <p>
                <Button className='btn btn-primary' onClick={() => navigatePizza('/')}>
                  Volver a 🏡
                </Button>
              </p>
            </section>
          </div>
        </section>) : undefined }
    </div>
  )
}

export default PizzaDetalle;
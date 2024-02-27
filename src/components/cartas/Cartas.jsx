import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { RestauranteContext } from '../../context/RestauranteContext';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

const Cartas = ({ plato }) => {
  const navigateRestaurante = useNavigate();
  const { agregarAlCarrito } = useContext(RestauranteContext);

  const buscarPlato = () => {
    navigateRestaurante(`/pizza/${plato.id}`);
  }

  return (
    <div className='cartas'>
      {
        <Card style={{width: '40rem'}} className="p-0">
          <Card.Img src={ plato.img } alt={ plato.name } />
          <Card.Body>
            <Card.Title className='fw-bold fs-4 text-center'> {plato.name.charAt(0).toUpperCase() + plato.name.slice(1)} </Card.Title>
            <Card.Text className='text-start'>
              <strong>Ingredientes:</strong>
            </Card.Text>
            { plato.ingredients.map( (ingrediente, indice) => <Card.Text key={indice} className='text-start'>
              <img src='/pizza.png' alt='pizza' style={{width: '5%'}} className='mx-2' /> {ingrediente}
            </Card.Text> ) }
            <Card.Text className='fw-bold fs-4'>
              Precio: $ {plato.price.toLocaleString('cl-CL')}
            </Card.Text>
            <Card.Footer className="botones">
              <Button className="btn btn-primary" onClick={ buscarPlato }>Ver más 👀</Button>              
              <Button className="btn btn-success" onClick={ () => agregarAlCarrito(plato) }>Agregar 🛒</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      }
    </div>  
  )}

  export default Cartas
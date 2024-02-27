import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './Carrito.css'

import { RestauranteContext } from '../../context/RestauranteContext';
import { useContext } from 'react';

export default function Carrito() {
  const { carrito, agregarAlCarrito, quitarDelCarrito, total, contador, limpiarElCarrito, pagar } = useContext(RestauranteContext);

  const navigateRestaurante = useNavigate()

  const incrementar = (plato) => {
    agregarAlCarrito(plato);
  }

  const decrementar = (producto) => {
    quitarDelCarrito(producto.id);
  }

  return(
    <div className='m-5 pt-1 carrito'>

      {carrito ? (
        <Container>
          {carrito.length > 0 ?  (
            <div className='text-bold fs-5'>
              <Row className='mb-2'>
                <Col className='fs-1 fw-bold'>Este es el detalles de su pedido:</Col>
              </Row>
              {carrito.map((producto) => 
                <Row key={producto.id}>
                  <Col xs={1} className='no-ver'>
                    <img src={producto.img} alt={producto.name} style={{width: '4rem'}} />
                  </Col>
                  <Col xs={3} className='text-start'>
                    {producto.name.charAt(0).toUpperCase() + producto.name.slice(1)}
                  </Col>
                  <Col xs={1} className='no-ver'>
                    {producto.cantidad}
                  </Col>
                  <Col xs={1} className='no-ver text-end'>
                    $ {producto.price.toLocaleString('cl-CL')}
                  </Col>
                  <Col xs={1} md={2} className='no-ver text-end'>
                    $ {(producto.cantidad * producto.price).toLocaleString('cl-CL')}
                  </Col>
                  <Col ><Button onClick={() => incrementar(producto)} className='btn btn-success'> + </Button></Col>
                  <Col ><Button onClick={() => decrementar(producto)} className='btn btn-danger'> - </Button></Col>
                </Row>
              )
              }
            </div>
          ) : (
            <div>
              <div className='titular-carrito'>
                <p className='badge text-bold fs-1'>Prestorante</p>
                <p className='badge text-bold fs-5'>Los mejores productos para usted</p>
              </div>
              <p><Button onClick={() => navigateRestaurante('/')} className='btn btn-primary fs-4'>Volver a 🏡</Button></p>
            </div>
          )}
          <hr className='text-primary' />
          {carrito.length === 0 ? ('') : (
            <Row className='text-bold fw-bold fs-4'>
              <Col className='no-ver'>
                Productos
              </Col>
              <Col className='no-ver'>{contador}</Col>
              <Col className='no-ver'>Total a pagar</Col>
              <Col><span className='no-ver'>$</span> {total.toLocaleString('cl-CL')}</Col>
              <Col>
                <Button onClick={() => pagar()} className='btn btn-success text-light'>Pagar</Button>
              </Col>
              <Col>
                <Button variant='danger' onClick={() => limpiarElCarrito()}>Limpiar</Button>
              </Col>
            </Row>
            )
          }
        </Container>) : (undefined)
      }
    </div>
  )
}
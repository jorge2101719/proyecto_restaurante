import { useContext } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import { RestauranteContext } from '../../context/RestauranteContext'
// import { useNavigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    // const navigateRestaurante = useNavigate()
    


    return (
        
        <Form>
            <Form.Group>
                <Form.Label>
                    <Form.Control
                        type='email'
                        id='email'
                        aria-describedby='emailLogin'
                        placeholder='email'
                    />
                    <Form.Text id='emailLogin'>
                        Ingrese su correo
                    </Form.Text>
                </Form.Label>
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    <Form.Control
                        type='password'
                        id='inputPassword'
                        aria-describedby='passwordLogin'
                        placeholder='password'
                    />
                    <Form.Text id='passwordLogin'>
                        Ingrese su clave
                    </Form.Text>
                </Form.Label>
            </Form.Group>
        </Form>
    )
}

export default Login
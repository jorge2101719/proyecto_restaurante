import { useContext } from 'react'

import Button from 'react-bootstrap/Button'

import { RestauranteContext } from '../../context/RestauranteContext'
import { useNavigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    const navigateRestaurante = useNavigate()
    


    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Ingrese su correo</label>
                <input type="text" placeholder="Correo" />

                <Button>Ingresar</Button>
            </form>
        </div>
    )
}

export default Login
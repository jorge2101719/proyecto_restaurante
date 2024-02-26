import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'



const Registro = () => {
    // Estados del formulario
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    // Estado de errores
    const [error, setError] = useState(false)

    // Función antes de enviar
    const validarLogin = (e) => {
        e.preventDefault()

        if (correo === '' || password === '') {
            alert('Debe completar todos los campos')
            setError(true)
            return
        }
        setError(false)
        setNombre('')
        setCorreo('')
        setPassword('')
    }

    return (
        <>
        <h1>Registro</h1>

        <form onSubmit={validarLogin}>
            <div className='form-group'>
                <label>Nombre</label>
                <input
                    className='form-control'
                    name='nombre'
                    type='text'
                    placeholder='ingrese su nombre'
                    onChange={ e => setNombre(e.target.value) }
                    value={nombre}
                />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input
                    className='form-control'
                    name='correo'
                    type='email'
                    placeholder='ingrese su correo'
                    onChange={ e => setCorreo(e.target.value) }
                    value={correo}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    className='form-control'
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
        </>
    )
}

export default Registro
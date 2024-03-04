const HomeAdmin = ({ user, setUser }) => {
    const handleLogout = () => {
        setUser([])
    }

    return (
        <div>
            <h1>Bienvenido {user}</h1>
            <button className="btn btn-second" onClick={ handleLogout }>Cerrar sesión</button>
        </div>
    )
}

export default HomeAdmin
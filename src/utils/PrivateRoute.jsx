import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ isLogin }) => {
    return isLogin ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute